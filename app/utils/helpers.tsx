export const Helpers = {
  renderHeadingList: (list: any) => {
    return list.map((matter: any) => ({
      type: matter?.type || "li",
      isApplyMotion: true,
      code: matter?.code,
      className: matter?.className,
      text: (
        <>
          {matter?.heading && (
            <>
              <span className="font-semibold">{matter.heading}</span>:{" "}
            </>
          )}
          {matter.description}
        </>
      ),
    }));
  },
  renderNestedList: (list: any) =>
    list.reduce((acc: any, step: any, index: number) => {
      acc = [
        ...acc,
        {
          type: "h4",
          text: `${index + 1}. ${step.heading}`,
        },
        {
          type: "ol",
          children: step.list.map((matter: any) => ({
            type: matter?.type || "li",
            isApplyMotion: true,
            text: (
              <>
                {matter?.heading && (
                  <>
                    <span className="font-semibold">{matter.heading}</span>:{" "}
                  </>
                )}
                {matter?.description}
              </>
            ),
            code: matter?.code,
            className: matter?.className,
          })),
        },
      ];
      return acc;
    }, []),
};

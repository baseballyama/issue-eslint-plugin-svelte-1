<script lang="ts">
  let obj = {
    child: {
      title: "hello!",
    },
  };

  $: child = obj.child;
  $: title = child?.title ?? "Yo!";
</script>

{child}{title}

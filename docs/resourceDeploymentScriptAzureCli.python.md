# `resourceDeploymentScriptAzureCli` Submodule <a name="`resourceDeploymentScriptAzureCli` Submodule" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceDeploymentScriptAzureCli <a name="ResourceDeploymentScriptAzureCli" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli azurerm_resource_deployment_script_azure_cli}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  retention_interval: str,
  version: str,
  cleanup_preference: str = None,
  command_line: str = None,
  container: ResourceDeploymentScriptAzureCliContainer = None,
  environment_variable: typing.Union[IResolvable, typing.List[ResourceDeploymentScriptAzureCliEnvironmentVariable]] = None,
  force_update_tag: str = None,
  id: str = None,
  identity: ResourceDeploymentScriptAzureCliIdentity = None,
  primary_script_uri: str = None,
  script_content: str = None,
  storage_account: ResourceDeploymentScriptAzureCliStorageAccount = None,
  supporting_script_uris: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeout: str = None,
  timeouts: ResourceDeploymentScriptAzureCliTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.retentionInterval">retention_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.cleanupPreference">cleanup_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.commandLine">command_line</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.environmentVariable">environment_variable</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]]</code> | environment_variable block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.primaryScriptUri">primary_script_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scriptContent">script_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.supportingScriptUris">supporting_script_uris</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.timeout">timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}.

---

##### `retention_interval`<sup>Required</sup> <a name="retention_interval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.retentionInterval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}.

---

##### `cleanup_preference`<sup>Optional</sup> <a name="cleanup_preference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.cleanupPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}.

---

##### `command_line`<sup>Optional</sup> <a name="command_line" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.commandLine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.container"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#container ResourceDeploymentScriptAzureCli#container}

---

##### `environment_variable`<sup>Optional</sup> <a name="environment_variable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.environmentVariable"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]]

environment_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#environment_variable ResourceDeploymentScriptAzureCli#environment_variable}

---

##### `force_update_tag`<sup>Optional</sup> <a name="force_update_tag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.forceUpdateTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#identity ResourceDeploymentScriptAzureCli#identity}

---

##### `primary_script_uri`<sup>Optional</sup> <a name="primary_script_uri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.primaryScriptUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}.

---

##### `script_content`<sup>Optional</sup> <a name="script_content" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scriptContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}.

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.storageAccount"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#storage_account ResourceDeploymentScriptAzureCli#storage_account}

---

##### `supporting_script_uris`<sup>Optional</sup> <a name="supporting_script_uris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.supportingScriptUris"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.timeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#timeouts ResourceDeploymentScriptAzureCli#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putEnvironmentVariable">put_environment_variable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCleanupPreference">reset_cleanup_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCommandLine">reset_command_line</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetEnvironmentVariable">reset_environment_variable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetForceUpdateTag">reset_force_update_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetPrimaryScriptUri">reset_primary_script_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetScriptContent">reset_script_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetStorageAccount">reset_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetSupportingScriptUris">reset_supporting_script_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_container` <a name="put_container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putContainer"></a>

```python
def put_container(
  container_group_name: str = None
) -> None
```

###### `container_group_name`<sup>Optional</sup> <a name="container_group_name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putContainer.parameter.containerGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#container_group_name ResourceDeploymentScriptAzureCli#container_group_name}.

---

##### `put_environment_variable` <a name="put_environment_variable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putEnvironmentVariable"></a>

```python
def put_environment_variable(
  value: typing.Union[IResolvable, typing.List[ResourceDeploymentScriptAzureCliEnvironmentVariable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putEnvironmentVariable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity"></a>

```python
def put_identity(
  identity_ids: typing.List[str],
  type: str
) -> None
```

###### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#identity_ids ResourceDeploymentScriptAzureCli#identity_ids}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#type ResourceDeploymentScriptAzureCli#type}.

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount"></a>

```python
def put_storage_account(
  key: str,
  name: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#key ResourceDeploymentScriptAzureCli#key}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#create ResourceDeploymentScriptAzureCli#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#delete ResourceDeploymentScriptAzureCli#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#read ResourceDeploymentScriptAzureCli#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#update ResourceDeploymentScriptAzureCli#update}.

---

##### `reset_cleanup_preference` <a name="reset_cleanup_preference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCleanupPreference"></a>

```python
def reset_cleanup_preference() -> None
```

##### `reset_command_line` <a name="reset_command_line" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCommandLine"></a>

```python
def reset_command_line() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_environment_variable` <a name="reset_environment_variable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetEnvironmentVariable"></a>

```python
def reset_environment_variable() -> None
```

##### `reset_force_update_tag` <a name="reset_force_update_tag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetForceUpdateTag"></a>

```python
def reset_force_update_tag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_primary_script_uri` <a name="reset_primary_script_uri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetPrimaryScriptUri"></a>

```python
def reset_primary_script_uri() -> None
```

##### `reset_script_content` <a name="reset_script_content" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetScriptContent"></a>

```python
def reset_script_content() -> None
```

##### `reset_storage_account` <a name="reset_storage_account" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetStorageAccount"></a>

```python
def reset_storage_account() -> None
```

##### `reset_supporting_script_uris` <a name="reset_supporting_script_uris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetSupportingScriptUris"></a>

```python
def reset_supporting_script_uris() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourceDeploymentScriptAzureCli resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourceDeploymentScriptAzureCli resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceDeploymentScriptAzureCli to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceDeploymentScriptAzureCli that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourceDeploymentScriptAzureCli to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference">ResourceDeploymentScriptAzureCliContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariable">environment_variable</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList">ResourceDeploymentScriptAzureCliEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference">ResourceDeploymentScriptAzureCliIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.outputs">outputs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference">ResourceDeploymentScriptAzureCliStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference">ResourceDeploymentScriptAzureCliTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreferenceInput">cleanup_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLineInput">command_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.containerInput">container_input</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariableInput">environment_variable_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTagInput">force_update_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUriInput">primary_script_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionIntervalInput">retention_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContentInput">script_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccountInput">storage_account_input</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUrisInput">supporting_script_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreference">cleanup_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLine">command_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUri">primary_script_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionInterval">retention_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContent">script_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUris">supporting_script_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.container"></a>

```python
container: ResourceDeploymentScriptAzureCliContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference">ResourceDeploymentScriptAzureCliContainerOutputReference</a>

---

##### `environment_variable`<sup>Required</sup> <a name="environment_variable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariable"></a>

```python
environment_variable: ResourceDeploymentScriptAzureCliEnvironmentVariableList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList">ResourceDeploymentScriptAzureCliEnvironmentVariableList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identity"></a>

```python
identity: ResourceDeploymentScriptAzureCliIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference">ResourceDeploymentScriptAzureCliIdentityOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.outputs"></a>

```python
outputs: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccount"></a>

```python
storage_account: ResourceDeploymentScriptAzureCliStorageAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference">ResourceDeploymentScriptAzureCliStorageAccountOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeouts"></a>

```python
timeouts: ResourceDeploymentScriptAzureCliTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference">ResourceDeploymentScriptAzureCliTimeoutsOutputReference</a>

---

##### `cleanup_preference_input`<sup>Optional</sup> <a name="cleanup_preference_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreferenceInput"></a>

```python
cleanup_preference_input: str
```

- *Type:* str

---

##### `command_line_input`<sup>Optional</sup> <a name="command_line_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLineInput"></a>

```python
command_line_input: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.containerInput"></a>

```python
container_input: ResourceDeploymentScriptAzureCliContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

---

##### `environment_variable_input`<sup>Optional</sup> <a name="environment_variable_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariableInput"></a>

```python
environment_variable_input: typing.Union[IResolvable, typing.List[ResourceDeploymentScriptAzureCliEnvironmentVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]]

---

##### `force_update_tag_input`<sup>Optional</sup> <a name="force_update_tag_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTagInput"></a>

```python
force_update_tag_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identityInput"></a>

```python
identity_input: ResourceDeploymentScriptAzureCliIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_script_uri_input`<sup>Optional</sup> <a name="primary_script_uri_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUriInput"></a>

```python
primary_script_uri_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `retention_interval_input`<sup>Optional</sup> <a name="retention_interval_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionIntervalInput"></a>

```python
retention_interval_input: str
```

- *Type:* str

---

##### `script_content_input`<sup>Optional</sup> <a name="script_content_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContentInput"></a>

```python
script_content_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccountInput"></a>

```python
storage_account_input: ResourceDeploymentScriptAzureCliStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

---

##### `supporting_script_uris_input`<sup>Optional</sup> <a name="supporting_script_uris_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUrisInput"></a>

```python
supporting_script_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourceDeploymentScriptAzureCliTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `cleanup_preference`<sup>Required</sup> <a name="cleanup_preference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreference"></a>

```python
cleanup_preference: str
```

- *Type:* str

---

##### `command_line`<sup>Required</sup> <a name="command_line" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLine"></a>

```python
command_line: str
```

- *Type:* str

---

##### `force_update_tag`<sup>Required</sup> <a name="force_update_tag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTag"></a>

```python
force_update_tag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_script_uri`<sup>Required</sup> <a name="primary_script_uri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUri"></a>

```python
primary_script_uri: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `retention_interval`<sup>Required</sup> <a name="retention_interval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionInterval"></a>

```python
retention_interval: str
```

- *Type:* str

---

##### `script_content`<sup>Required</sup> <a name="script_content" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContent"></a>

```python
script_content: str
```

- *Type:* str

---

##### `supporting_script_uris`<sup>Required</sup> <a name="supporting_script_uris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUris"></a>

```python
supporting_script_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceDeploymentScriptAzureCliConfig <a name="ResourceDeploymentScriptAzureCliConfig" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  retention_interval: str,
  version: str,
  cleanup_preference: str = None,
  command_line: str = None,
  container: ResourceDeploymentScriptAzureCliContainer = None,
  environment_variable: typing.Union[IResolvable, typing.List[ResourceDeploymentScriptAzureCliEnvironmentVariable]] = None,
  force_update_tag: str = None,
  id: str = None,
  identity: ResourceDeploymentScriptAzureCliIdentity = None,
  primary_script_uri: str = None,
  script_content: str = None,
  storage_account: ResourceDeploymentScriptAzureCliStorageAccount = None,
  supporting_script_uris: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  timeout: str = None,
  timeouts: ResourceDeploymentScriptAzureCliTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.retentionInterval">retention_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.cleanupPreference">cleanup_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.commandLine">command_line</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.environmentVariable">environment_variable</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]]</code> | environment_variable block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forceUpdateTag">force_update_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.primaryScriptUri">primary_script_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.scriptContent">script_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.supportingScriptUris">supporting_script_uris</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeout">timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}.

---

##### `retention_interval`<sup>Required</sup> <a name="retention_interval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.retentionInterval"></a>

```python
retention_interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}.

---

##### `cleanup_preference`<sup>Optional</sup> <a name="cleanup_preference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.cleanupPreference"></a>

```python
cleanup_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}.

---

##### `command_line`<sup>Optional</sup> <a name="command_line" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.commandLine"></a>

```python
command_line: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.container"></a>

```python
container: ResourceDeploymentScriptAzureCliContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#container ResourceDeploymentScriptAzureCli#container}

---

##### `environment_variable`<sup>Optional</sup> <a name="environment_variable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.environmentVariable"></a>

```python
environment_variable: typing.Union[IResolvable, typing.List[ResourceDeploymentScriptAzureCliEnvironmentVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]]

environment_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#environment_variable ResourceDeploymentScriptAzureCli#environment_variable}

---

##### `force_update_tag`<sup>Optional</sup> <a name="force_update_tag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forceUpdateTag"></a>

```python
force_update_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.identity"></a>

```python
identity: ResourceDeploymentScriptAzureCliIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#identity ResourceDeploymentScriptAzureCli#identity}

---

##### `primary_script_uri`<sup>Optional</sup> <a name="primary_script_uri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.primaryScriptUri"></a>

```python
primary_script_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}.

---

##### `script_content`<sup>Optional</sup> <a name="script_content" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.scriptContent"></a>

```python
script_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}.

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.storageAccount"></a>

```python
storage_account: ResourceDeploymentScriptAzureCliStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#storage_account ResourceDeploymentScriptAzureCli#storage_account}

---

##### `supporting_script_uris`<sup>Optional</sup> <a name="supporting_script_uris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.supportingScriptUris"></a>

```python
supporting_script_uris: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeouts"></a>

```python
timeouts: ResourceDeploymentScriptAzureCliTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#timeouts ResourceDeploymentScriptAzureCli#timeouts}

---

### ResourceDeploymentScriptAzureCliContainer <a name="ResourceDeploymentScriptAzureCliContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer(
  container_group_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer.property.containerGroupName">container_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#container_group_name ResourceDeploymentScriptAzureCli#container_group_name}. |

---

##### `container_group_name`<sup>Optional</sup> <a name="container_group_name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer.property.containerGroupName"></a>

```python
container_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#container_group_name ResourceDeploymentScriptAzureCli#container_group_name}.

---

### ResourceDeploymentScriptAzureCliEnvironmentVariable <a name="ResourceDeploymentScriptAzureCliEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable(
  name: str,
  secure_value: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.secureValue">secure_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#secure_value ResourceDeploymentScriptAzureCli#secure_value}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#value ResourceDeploymentScriptAzureCli#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

##### `secure_value`<sup>Optional</sup> <a name="secure_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.secureValue"></a>

```python
secure_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#secure_value ResourceDeploymentScriptAzureCli#secure_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#value ResourceDeploymentScriptAzureCli#value}.

---

### ResourceDeploymentScriptAzureCliIdentity <a name="ResourceDeploymentScriptAzureCliIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity(
  identity_ids: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#identity_ids ResourceDeploymentScriptAzureCli#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#type ResourceDeploymentScriptAzureCli#type}. |

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#identity_ids ResourceDeploymentScriptAzureCli#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#type ResourceDeploymentScriptAzureCli#type}.

---

### ResourceDeploymentScriptAzureCliStorageAccount <a name="ResourceDeploymentScriptAzureCliStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount(
  key: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#key ResourceDeploymentScriptAzureCli#key}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#key ResourceDeploymentScriptAzureCli#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

### ResourceDeploymentScriptAzureCliTimeouts <a name="ResourceDeploymentScriptAzureCliTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#create ResourceDeploymentScriptAzureCli#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#delete ResourceDeploymentScriptAzureCli#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#read ResourceDeploymentScriptAzureCli#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#update ResourceDeploymentScriptAzureCli#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#create ResourceDeploymentScriptAzureCli#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#delete ResourceDeploymentScriptAzureCli#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#read ResourceDeploymentScriptAzureCli#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/resource_deployment_script_azure_cli#update ResourceDeploymentScriptAzureCli#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceDeploymentScriptAzureCliContainerOutputReference <a name="ResourceDeploymentScriptAzureCliContainerOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resetContainerGroupName">reset_container_group_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_group_name` <a name="reset_container_group_name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resetContainerGroupName"></a>

```python
def reset_container_group_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupNameInput">container_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupName">container_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_group_name_input`<sup>Optional</sup> <a name="container_group_name_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupNameInput"></a>

```python
container_group_name_input: str
```

- *Type:* str

---

##### `container_group_name`<sup>Required</sup> <a name="container_group_name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupName"></a>

```python
container_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.internalValue"></a>

```python
internal_value: ResourceDeploymentScriptAzureCliContainer
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

---


### ResourceDeploymentScriptAzureCliEnvironmentVariableList <a name="ResourceDeploymentScriptAzureCliEnvironmentVariableList" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourceDeploymentScriptAzureCliEnvironmentVariable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]]

---


### ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference <a name="ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetSecureValue">reset_secure_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secure_value` <a name="reset_secure_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetSecureValue"></a>

```python
def reset_secure_value() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValueInput">secure_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValue">secure_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secure_value_input`<sup>Optional</sup> <a name="secure_value_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValueInput"></a>

```python
secure_value_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secure_value`<sup>Required</sup> <a name="secure_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValue"></a>

```python
secure_value: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceDeploymentScriptAzureCliEnvironmentVariable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>]

---


### ResourceDeploymentScriptAzureCliIdentityOutputReference <a name="ResourceDeploymentScriptAzureCliIdentityOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ResourceDeploymentScriptAzureCliIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

---


### ResourceDeploymentScriptAzureCliStorageAccountOutputReference <a name="ResourceDeploymentScriptAzureCliStorageAccountOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: ResourceDeploymentScriptAzureCliStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

---


### ResourceDeploymentScriptAzureCliTimeoutsOutputReference <a name="ResourceDeploymentScriptAzureCliTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_deployment_script_azure_cli

resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourceDeploymentScriptAzureCliTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>]

---




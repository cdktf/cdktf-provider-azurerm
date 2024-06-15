# `resourceDeploymentScriptAzurePowerShell` Submodule <a name="`resourceDeploymentScriptAzurePowerShell` Submodule" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceDeploymentScriptAzurePowerShell <a name="ResourceDeploymentScriptAzurePowerShell" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell azurerm_resource_deployment_script_azure_power_shell}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShell;

ResourceDeploymentScriptAzurePowerShell.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .retentionInterval(java.lang.String)
    .version(java.lang.String)
//  .cleanupPreference(java.lang.String)
//  .commandLine(java.lang.String)
//  .container(ResourceDeploymentScriptAzurePowerShellContainer)
//  .environmentVariable(IResolvable)
//  .environmentVariable(java.util.List<ResourceDeploymentScriptAzurePowerShellEnvironmentVariable>)
//  .forceUpdateTag(java.lang.String)
//  .id(java.lang.String)
//  .identity(ResourceDeploymentScriptAzurePowerShellIdentity)
//  .primaryScriptUri(java.lang.String)
//  .scriptContent(java.lang.String)
//  .storageAccount(ResourceDeploymentScriptAzurePowerShellStorageAccount)
//  .supportingScriptUris(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.String)
//  .timeouts(ResourceDeploymentScriptAzurePowerShellTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#location ResourceDeploymentScriptAzurePowerShell#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#resource_group_name ResourceDeploymentScriptAzurePowerShell#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.retentionInterval">retentionInterval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#retention_interval ResourceDeploymentScriptAzurePowerShell#retention_interval}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#version ResourceDeploymentScriptAzurePowerShell#version}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.cleanupPreference">cleanupPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#cleanup_preference ResourceDeploymentScriptAzurePowerShell#cleanup_preference}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.commandLine">commandLine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#command_line ResourceDeploymentScriptAzurePowerShell#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.environmentVariable">environmentVariable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>></code> | environment_variable block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.forceUpdateTag">forceUpdateTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#force_update_tag ResourceDeploymentScriptAzurePowerShell#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#id ResourceDeploymentScriptAzurePowerShell#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.primaryScriptUri">primaryScriptUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#primary_script_uri ResourceDeploymentScriptAzurePowerShell#primary_script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.scriptContent">scriptContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#script_content ResourceDeploymentScriptAzurePowerShell#script_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.supportingScriptUris">supportingScriptUris</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#supporting_script_uris ResourceDeploymentScriptAzurePowerShell#supporting_script_uris}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#tags ResourceDeploymentScriptAzurePowerShell#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#timeout ResourceDeploymentScriptAzurePowerShell#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#location ResourceDeploymentScriptAzurePowerShell#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#resource_group_name ResourceDeploymentScriptAzurePowerShell#resource_group_name}.

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.retentionInterval"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#retention_interval ResourceDeploymentScriptAzurePowerShell#retention_interval}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#version ResourceDeploymentScriptAzurePowerShell#version}.

---

##### `cleanupPreference`<sup>Optional</sup> <a name="cleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.cleanupPreference"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#cleanup_preference ResourceDeploymentScriptAzurePowerShell#cleanup_preference}.

---

##### `commandLine`<sup>Optional</sup> <a name="commandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.commandLine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#command_line ResourceDeploymentScriptAzurePowerShell#command_line}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.container"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#container ResourceDeploymentScriptAzurePowerShell#container}

---

##### `environmentVariable`<sup>Optional</sup> <a name="environmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.environmentVariable"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>>

environment_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#environment_variable ResourceDeploymentScriptAzurePowerShell#environment_variable}

---

##### `forceUpdateTag`<sup>Optional</sup> <a name="forceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.forceUpdateTag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#force_update_tag ResourceDeploymentScriptAzurePowerShell#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#id ResourceDeploymentScriptAzurePowerShell#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#identity ResourceDeploymentScriptAzurePowerShell#identity}

---

##### `primaryScriptUri`<sup>Optional</sup> <a name="primaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.primaryScriptUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#primary_script_uri ResourceDeploymentScriptAzurePowerShell#primary_script_uri}.

---

##### `scriptContent`<sup>Optional</sup> <a name="scriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.scriptContent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#script_content ResourceDeploymentScriptAzurePowerShell#script_content}.

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.storageAccount"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#storage_account ResourceDeploymentScriptAzurePowerShell#storage_account}

---

##### `supportingScriptUris`<sup>Optional</sup> <a name="supportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.supportingScriptUris"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#supporting_script_uris ResourceDeploymentScriptAzurePowerShell#supporting_script_uris}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#tags ResourceDeploymentScriptAzurePowerShell#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.timeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#timeout ResourceDeploymentScriptAzurePowerShell#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#timeouts ResourceDeploymentScriptAzurePowerShell#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putEnvironmentVariable">putEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetCleanupPreference">resetCleanupPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetCommandLine">resetCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetEnvironmentVariable">resetEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetForceUpdateTag">resetForceUpdateTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetPrimaryScriptUri">resetPrimaryScriptUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetScriptContent">resetScriptContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetSupportingScriptUris">resetSupportingScriptUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putContainer"></a>

```java
public void putContainer(ResourceDeploymentScriptAzurePowerShellContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a>

---

##### `putEnvironmentVariable` <a name="putEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putEnvironmentVariable"></a>

```java
public void putEnvironmentVariable(IResolvable OR java.util.List<ResourceDeploymentScriptAzurePowerShellEnvironmentVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putEnvironmentVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putIdentity"></a>

```java
public void putIdentity(ResourceDeploymentScriptAzurePowerShellIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putStorageAccount"></a>

```java
public void putStorageAccount(ResourceDeploymentScriptAzurePowerShellStorageAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putTimeouts"></a>

```java
public void putTimeouts(ResourceDeploymentScriptAzurePowerShellTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a>

---

##### `resetCleanupPreference` <a name="resetCleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetCleanupPreference"></a>

```java
public void resetCleanupPreference()
```

##### `resetCommandLine` <a name="resetCommandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetCommandLine"></a>

```java
public void resetCommandLine()
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetContainer"></a>

```java
public void resetContainer()
```

##### `resetEnvironmentVariable` <a name="resetEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetEnvironmentVariable"></a>

```java
public void resetEnvironmentVariable()
```

##### `resetForceUpdateTag` <a name="resetForceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetForceUpdateTag"></a>

```java
public void resetForceUpdateTag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetPrimaryScriptUri` <a name="resetPrimaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetPrimaryScriptUri"></a>

```java
public void resetPrimaryScriptUri()
```

##### `resetScriptContent` <a name="resetScriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetScriptContent"></a>

```java
public void resetScriptContent()
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetStorageAccount"></a>

```java
public void resetStorageAccount()
```

##### `resetSupportingScriptUris` <a name="resetSupportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetSupportingScriptUris"></a>

```java
public void resetSupportingScriptUris()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceDeploymentScriptAzurePowerShell resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShell;

ResourceDeploymentScriptAzurePowerShell.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShell;

ResourceDeploymentScriptAzurePowerShell.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShell;

ResourceDeploymentScriptAzurePowerShell.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShell;

ResourceDeploymentScriptAzurePowerShell.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceDeploymentScriptAzurePowerShell.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResourceDeploymentScriptAzurePowerShell resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceDeploymentScriptAzurePowerShell to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceDeploymentScriptAzurePowerShell that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResourceDeploymentScriptAzurePowerShell to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference">ResourceDeploymentScriptAzurePowerShellContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.environmentVariable">environmentVariable</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList">ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference">ResourceDeploymentScriptAzurePowerShellIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.outputs">outputs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference">ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference">ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cleanupPreferenceInput">cleanupPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.commandLineInput">commandLineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.containerInput">containerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.environmentVariableInput">environmentVariableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forceUpdateTagInput">forceUpdateTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.primaryScriptUriInput">primaryScriptUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.retentionIntervalInput">retentionIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.scriptContentInput">scriptContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.storageAccountInput">storageAccountInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.supportingScriptUrisInput">supportingScriptUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cleanupPreference">cleanupPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.commandLine">commandLine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forceUpdateTag">forceUpdateTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.primaryScriptUri">primaryScriptUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.retentionInterval">retentionInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.scriptContent">scriptContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.supportingScriptUris">supportingScriptUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.container"></a>

```java
public ResourceDeploymentScriptAzurePowerShellContainerOutputReference getContainer();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference">ResourceDeploymentScriptAzurePowerShellContainerOutputReference</a>

---

##### `environmentVariable`<sup>Required</sup> <a name="environmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.environmentVariable"></a>

```java
public ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList getEnvironmentVariable();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList">ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.identity"></a>

```java
public ResourceDeploymentScriptAzurePowerShellIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference">ResourceDeploymentScriptAzurePowerShellIdentityOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.outputs"></a>

```java
public java.lang.String getOutputs();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.storageAccount"></a>

```java
public ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference getStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference">ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeouts"></a>

```java
public ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference">ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference</a>

---

##### `cleanupPreferenceInput`<sup>Optional</sup> <a name="cleanupPreferenceInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cleanupPreferenceInput"></a>

```java
public java.lang.String getCleanupPreferenceInput();
```

- *Type:* java.lang.String

---

##### `commandLineInput`<sup>Optional</sup> <a name="commandLineInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.commandLineInput"></a>

```java
public java.lang.String getCommandLineInput();
```

- *Type:* java.lang.String

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.containerInput"></a>

```java
public ResourceDeploymentScriptAzurePowerShellContainer getContainerInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a>

---

##### `environmentVariableInput`<sup>Optional</sup> <a name="environmentVariableInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.environmentVariableInput"></a>

```java
public java.lang.Object getEnvironmentVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>>

---

##### `forceUpdateTagInput`<sup>Optional</sup> <a name="forceUpdateTagInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forceUpdateTagInput"></a>

```java
public java.lang.String getForceUpdateTagInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.identityInput"></a>

```java
public ResourceDeploymentScriptAzurePowerShellIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryScriptUriInput`<sup>Optional</sup> <a name="primaryScriptUriInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.primaryScriptUriInput"></a>

```java
public java.lang.String getPrimaryScriptUriInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retentionIntervalInput`<sup>Optional</sup> <a name="retentionIntervalInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.retentionIntervalInput"></a>

```java
public java.lang.String getRetentionIntervalInput();
```

- *Type:* java.lang.String

---

##### `scriptContentInput`<sup>Optional</sup> <a name="scriptContentInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.scriptContentInput"></a>

```java
public java.lang.String getScriptContentInput();
```

- *Type:* java.lang.String

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.storageAccountInput"></a>

```java
public ResourceDeploymentScriptAzurePowerShellStorageAccount getStorageAccountInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a>

---

##### `supportingScriptUrisInput`<sup>Optional</sup> <a name="supportingScriptUrisInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.supportingScriptUrisInput"></a>

```java
public java.util.List<java.lang.String> getSupportingScriptUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `cleanupPreference`<sup>Required</sup> <a name="cleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.cleanupPreference"></a>

```java
public java.lang.String getCleanupPreference();
```

- *Type:* java.lang.String

---

##### `commandLine`<sup>Required</sup> <a name="commandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.commandLine"></a>

```java
public java.lang.String getCommandLine();
```

- *Type:* java.lang.String

---

##### `forceUpdateTag`<sup>Required</sup> <a name="forceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.forceUpdateTag"></a>

```java
public java.lang.String getForceUpdateTag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryScriptUri`<sup>Required</sup> <a name="primaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.primaryScriptUri"></a>

```java
public java.lang.String getPrimaryScriptUri();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.retentionInterval"></a>

```java
public java.lang.String getRetentionInterval();
```

- *Type:* java.lang.String

---

##### `scriptContent`<sup>Required</sup> <a name="scriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.scriptContent"></a>

```java
public java.lang.String getScriptContent();
```

- *Type:* java.lang.String

---

##### `supportingScriptUris`<sup>Required</sup> <a name="supportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.supportingScriptUris"></a>

```java
public java.util.List<java.lang.String> getSupportingScriptUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShell.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceDeploymentScriptAzurePowerShellConfig <a name="ResourceDeploymentScriptAzurePowerShellConfig" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellConfig;

ResourceDeploymentScriptAzurePowerShellConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .retentionInterval(java.lang.String)
    .version(java.lang.String)
//  .cleanupPreference(java.lang.String)
//  .commandLine(java.lang.String)
//  .container(ResourceDeploymentScriptAzurePowerShellContainer)
//  .environmentVariable(IResolvable)
//  .environmentVariable(java.util.List<ResourceDeploymentScriptAzurePowerShellEnvironmentVariable>)
//  .forceUpdateTag(java.lang.String)
//  .id(java.lang.String)
//  .identity(ResourceDeploymentScriptAzurePowerShellIdentity)
//  .primaryScriptUri(java.lang.String)
//  .scriptContent(java.lang.String)
//  .storageAccount(ResourceDeploymentScriptAzurePowerShellStorageAccount)
//  .supportingScriptUris(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.String)
//  .timeouts(ResourceDeploymentScriptAzurePowerShellTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#location ResourceDeploymentScriptAzurePowerShell#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#resource_group_name ResourceDeploymentScriptAzurePowerShell#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.retentionInterval">retentionInterval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#retention_interval ResourceDeploymentScriptAzurePowerShell#retention_interval}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#version ResourceDeploymentScriptAzurePowerShell#version}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.cleanupPreference">cleanupPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#cleanup_preference ResourceDeploymentScriptAzurePowerShell#cleanup_preference}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.commandLine">commandLine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#command_line ResourceDeploymentScriptAzurePowerShell#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.environmentVariable">environmentVariable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>></code> | environment_variable block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.forceUpdateTag">forceUpdateTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#force_update_tag ResourceDeploymentScriptAzurePowerShell#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#id ResourceDeploymentScriptAzurePowerShell#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.primaryScriptUri">primaryScriptUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#primary_script_uri ResourceDeploymentScriptAzurePowerShell#primary_script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.scriptContent">scriptContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#script_content ResourceDeploymentScriptAzurePowerShell#script_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.supportingScriptUris">supportingScriptUris</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#supporting_script_uris ResourceDeploymentScriptAzurePowerShell#supporting_script_uris}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#tags ResourceDeploymentScriptAzurePowerShell#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#timeout ResourceDeploymentScriptAzurePowerShell#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#location ResourceDeploymentScriptAzurePowerShell#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#resource_group_name ResourceDeploymentScriptAzurePowerShell#resource_group_name}.

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.retentionInterval"></a>

```java
public java.lang.String getRetentionInterval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#retention_interval ResourceDeploymentScriptAzurePowerShell#retention_interval}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#version ResourceDeploymentScriptAzurePowerShell#version}.

---

##### `cleanupPreference`<sup>Optional</sup> <a name="cleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.cleanupPreference"></a>

```java
public java.lang.String getCleanupPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#cleanup_preference ResourceDeploymentScriptAzurePowerShell#cleanup_preference}.

---

##### `commandLine`<sup>Optional</sup> <a name="commandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.commandLine"></a>

```java
public java.lang.String getCommandLine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#command_line ResourceDeploymentScriptAzurePowerShell#command_line}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.container"></a>

```java
public ResourceDeploymentScriptAzurePowerShellContainer getContainer();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#container ResourceDeploymentScriptAzurePowerShell#container}

---

##### `environmentVariable`<sup>Optional</sup> <a name="environmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.environmentVariable"></a>

```java
public java.lang.Object getEnvironmentVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>>

environment_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#environment_variable ResourceDeploymentScriptAzurePowerShell#environment_variable}

---

##### `forceUpdateTag`<sup>Optional</sup> <a name="forceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.forceUpdateTag"></a>

```java
public java.lang.String getForceUpdateTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#force_update_tag ResourceDeploymentScriptAzurePowerShell#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#id ResourceDeploymentScriptAzurePowerShell#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.identity"></a>

```java
public ResourceDeploymentScriptAzurePowerShellIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#identity ResourceDeploymentScriptAzurePowerShell#identity}

---

##### `primaryScriptUri`<sup>Optional</sup> <a name="primaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.primaryScriptUri"></a>

```java
public java.lang.String getPrimaryScriptUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#primary_script_uri ResourceDeploymentScriptAzurePowerShell#primary_script_uri}.

---

##### `scriptContent`<sup>Optional</sup> <a name="scriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.scriptContent"></a>

```java
public java.lang.String getScriptContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#script_content ResourceDeploymentScriptAzurePowerShell#script_content}.

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.storageAccount"></a>

```java
public ResourceDeploymentScriptAzurePowerShellStorageAccount getStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#storage_account ResourceDeploymentScriptAzurePowerShell#storage_account}

---

##### `supportingScriptUris`<sup>Optional</sup> <a name="supportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.supportingScriptUris"></a>

```java
public java.util.List<java.lang.String> getSupportingScriptUris();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#supporting_script_uris ResourceDeploymentScriptAzurePowerShell#supporting_script_uris}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#tags ResourceDeploymentScriptAzurePowerShell#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#timeout ResourceDeploymentScriptAzurePowerShell#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellConfig.property.timeouts"></a>

```java
public ResourceDeploymentScriptAzurePowerShellTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#timeouts ResourceDeploymentScriptAzurePowerShell#timeouts}

---

### ResourceDeploymentScriptAzurePowerShellContainer <a name="ResourceDeploymentScriptAzurePowerShellContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellContainer;

ResourceDeploymentScriptAzurePowerShellContainer.builder()
//  .containerGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer.property.containerGroupName">containerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#container_group_name ResourceDeploymentScriptAzurePowerShell#container_group_name}. |

---

##### `containerGroupName`<sup>Optional</sup> <a name="containerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer.property.containerGroupName"></a>

```java
public java.lang.String getContainerGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#container_group_name ResourceDeploymentScriptAzurePowerShell#container_group_name}.

---

### ResourceDeploymentScriptAzurePowerShellEnvironmentVariable <a name="ResourceDeploymentScriptAzurePowerShellEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable;

ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.builder()
    .name(java.lang.String)
//  .secureValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.secureValue">secureValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#secure_value ResourceDeploymentScriptAzurePowerShell#secure_value}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#value ResourceDeploymentScriptAzurePowerShell#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}.

---

##### `secureValue`<sup>Optional</sup> <a name="secureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.secureValue"></a>

```java
public java.lang.String getSecureValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#secure_value ResourceDeploymentScriptAzurePowerShell#secure_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#value ResourceDeploymentScriptAzurePowerShell#value}.

---

### ResourceDeploymentScriptAzurePowerShellIdentity <a name="ResourceDeploymentScriptAzurePowerShellIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellIdentity;

ResourceDeploymentScriptAzurePowerShellIdentity.builder()
    .identityIds(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#identity_ids ResourceDeploymentScriptAzurePowerShell#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#type ResourceDeploymentScriptAzurePowerShell#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#identity_ids ResourceDeploymentScriptAzurePowerShell#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#type ResourceDeploymentScriptAzurePowerShell#type}.

---

### ResourceDeploymentScriptAzurePowerShellStorageAccount <a name="ResourceDeploymentScriptAzurePowerShellStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellStorageAccount;

ResourceDeploymentScriptAzurePowerShellStorageAccount.builder()
    .key(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#key ResourceDeploymentScriptAzurePowerShell#key}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#key ResourceDeploymentScriptAzurePowerShell#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#name ResourceDeploymentScriptAzurePowerShell#name}.

---

### ResourceDeploymentScriptAzurePowerShellTimeouts <a name="ResourceDeploymentScriptAzurePowerShellTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellTimeouts;

ResourceDeploymentScriptAzurePowerShellTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#create ResourceDeploymentScriptAzurePowerShell#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#delete ResourceDeploymentScriptAzurePowerShell#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#read ResourceDeploymentScriptAzurePowerShell#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#update ResourceDeploymentScriptAzurePowerShell#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#create ResourceDeploymentScriptAzurePowerShell#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#delete ResourceDeploymentScriptAzurePowerShell#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#read ResourceDeploymentScriptAzurePowerShell#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/resource_deployment_script_azure_power_shell#update ResourceDeploymentScriptAzurePowerShell#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceDeploymentScriptAzurePowerShellContainerOutputReference <a name="ResourceDeploymentScriptAzurePowerShellContainerOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference;

new ResourceDeploymentScriptAzurePowerShellContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resetContainerGroupName">resetContainerGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerGroupName` <a name="resetContainerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.resetContainerGroupName"></a>

```java
public void resetContainerGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.containerGroupNameInput">containerGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.containerGroupName">containerGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerGroupNameInput`<sup>Optional</sup> <a name="containerGroupNameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.containerGroupNameInput"></a>

```java
public java.lang.String getContainerGroupNameInput();
```

- *Type:* java.lang.String

---

##### `containerGroupName`<sup>Required</sup> <a name="containerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.containerGroupName"></a>

```java
public java.lang.String getContainerGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainerOutputReference.property.internalValue"></a>

```java
public ResourceDeploymentScriptAzurePowerShellContainer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellContainer">ResourceDeploymentScriptAzurePowerShellContainer</a>

---


### ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList <a name="ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList;

new ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.get"></a>

```java
public ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>>

---


### ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference <a name="ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference;

new ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resetSecureValue">resetSecureValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecureValue` <a name="resetSecureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resetSecureValue"></a>

```java
public void resetSecureValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.secureValueInput">secureValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.secureValue">secureValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secureValueInput`<sup>Optional</sup> <a name="secureValueInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.secureValueInput"></a>

```java
public java.lang.String getSecureValueInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secureValue`<sup>Required</sup> <a name="secureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.secureValue"></a>

```java
public java.lang.String getSecureValue();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellEnvironmentVariable">ResourceDeploymentScriptAzurePowerShellEnvironmentVariable</a>

---


### ResourceDeploymentScriptAzurePowerShellIdentityOutputReference <a name="ResourceDeploymentScriptAzurePowerShellIdentityOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference;

new ResourceDeploymentScriptAzurePowerShellIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentityOutputReference.property.internalValue"></a>

```java
public ResourceDeploymentScriptAzurePowerShellIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellIdentity">ResourceDeploymentScriptAzurePowerShellIdentity</a>

---


### ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference <a name="ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference;

new ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccountOutputReference.property.internalValue"></a>

```java
public ResourceDeploymentScriptAzurePowerShellStorageAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellStorageAccount">ResourceDeploymentScriptAzurePowerShellStorageAccount</a>

---


### ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference <a name="ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_power_shell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference;

new ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzurePowerShell.ResourceDeploymentScriptAzurePowerShellTimeouts">ResourceDeploymentScriptAzurePowerShellTimeouts</a>

---




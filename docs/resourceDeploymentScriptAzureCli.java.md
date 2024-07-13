# `resourceDeploymentScriptAzureCli` Submodule <a name="`resourceDeploymentScriptAzureCli` Submodule" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceDeploymentScriptAzureCli <a name="ResourceDeploymentScriptAzureCli" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli azurerm_resource_deployment_script_azure_cli}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCli;

ResourceDeploymentScriptAzureCli.Builder.create(Construct scope, java.lang.String id)
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
//  .container(ResourceDeploymentScriptAzureCliContainer)
//  .environmentVariable(IResolvable)
//  .environmentVariable(java.util.List<ResourceDeploymentScriptAzureCliEnvironmentVariable>)
//  .forceUpdateTag(java.lang.String)
//  .id(java.lang.String)
//  .identity(ResourceDeploymentScriptAzureCliIdentity)
//  .primaryScriptUri(java.lang.String)
//  .scriptContent(java.lang.String)
//  .storageAccount(ResourceDeploymentScriptAzureCliStorageAccount)
//  .supportingScriptUris(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.String)
//  .timeouts(ResourceDeploymentScriptAzureCliTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.retentionInterval">retentionInterval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.cleanupPreference">cleanupPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.commandLine">commandLine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.environmentVariable">environmentVariable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>></code> | environment_variable block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.forceUpdateTag">forceUpdateTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.primaryScriptUri">primaryScriptUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scriptContent">scriptContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.supportingScriptUris">supportingScriptUris</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}.

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.retentionInterval"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}.

---

##### `cleanupPreference`<sup>Optional</sup> <a name="cleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.cleanupPreference"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}.

---

##### `commandLine`<sup>Optional</sup> <a name="commandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.commandLine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.container"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#container ResourceDeploymentScriptAzureCli#container}

---

##### `environmentVariable`<sup>Optional</sup> <a name="environmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.environmentVariable"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>>

environment_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#environment_variable ResourceDeploymentScriptAzureCli#environment_variable}

---

##### `forceUpdateTag`<sup>Optional</sup> <a name="forceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.forceUpdateTag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#identity ResourceDeploymentScriptAzureCli#identity}

---

##### `primaryScriptUri`<sup>Optional</sup> <a name="primaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.primaryScriptUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}.

---

##### `scriptContent`<sup>Optional</sup> <a name="scriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.scriptContent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}.

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.storageAccount"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#storage_account ResourceDeploymentScriptAzureCli#storage_account}

---

##### `supportingScriptUris`<sup>Optional</sup> <a name="supportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.supportingScriptUris"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.timeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#timeouts ResourceDeploymentScriptAzureCli#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putEnvironmentVariable">putEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount">putStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCleanupPreference">resetCleanupPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCommandLine">resetCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetEnvironmentVariable">resetEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetForceUpdateTag">resetForceUpdateTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetPrimaryScriptUri">resetPrimaryScriptUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetScriptContent">resetScriptContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetStorageAccount">resetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetSupportingScriptUris">resetSupportingScriptUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putContainer"></a>

```java
public void putContainer(ResourceDeploymentScriptAzureCliContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

---

##### `putEnvironmentVariable` <a name="putEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putEnvironmentVariable"></a>

```java
public void putEnvironmentVariable(IResolvable OR java.util.List<ResourceDeploymentScriptAzureCliEnvironmentVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putEnvironmentVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity"></a>

```java
public void putIdentity(ResourceDeploymentScriptAzureCliIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

---

##### `putStorageAccount` <a name="putStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount"></a>

```java
public void putStorageAccount(ResourceDeploymentScriptAzureCliStorageAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts"></a>

```java
public void putTimeouts(ResourceDeploymentScriptAzureCliTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>

---

##### `resetCleanupPreference` <a name="resetCleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCleanupPreference"></a>

```java
public void resetCleanupPreference()
```

##### `resetCommandLine` <a name="resetCommandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetCommandLine"></a>

```java
public void resetCommandLine()
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetContainer"></a>

```java
public void resetContainer()
```

##### `resetEnvironmentVariable` <a name="resetEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetEnvironmentVariable"></a>

```java
public void resetEnvironmentVariable()
```

##### `resetForceUpdateTag` <a name="resetForceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetForceUpdateTag"></a>

```java
public void resetForceUpdateTag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetPrimaryScriptUri` <a name="resetPrimaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetPrimaryScriptUri"></a>

```java
public void resetPrimaryScriptUri()
```

##### `resetScriptContent` <a name="resetScriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetScriptContent"></a>

```java
public void resetScriptContent()
```

##### `resetStorageAccount` <a name="resetStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetStorageAccount"></a>

```java
public void resetStorageAccount()
```

##### `resetSupportingScriptUris` <a name="resetSupportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetSupportingScriptUris"></a>

```java
public void resetSupportingScriptUris()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceDeploymentScriptAzureCli resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCli;

ResourceDeploymentScriptAzureCli.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCli;

ResourceDeploymentScriptAzureCli.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCli;

ResourceDeploymentScriptAzureCli.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCli;

ResourceDeploymentScriptAzureCli.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceDeploymentScriptAzureCli.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResourceDeploymentScriptAzureCli resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceDeploymentScriptAzureCli to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceDeploymentScriptAzureCli that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResourceDeploymentScriptAzureCli to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference">ResourceDeploymentScriptAzureCliContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariable">environmentVariable</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList">ResourceDeploymentScriptAzureCliEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference">ResourceDeploymentScriptAzureCliIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.outputs">outputs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference">ResourceDeploymentScriptAzureCliStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference">ResourceDeploymentScriptAzureCliTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreferenceInput">cleanupPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLineInput">commandLineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.containerInput">containerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariableInput">environmentVariableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTagInput">forceUpdateTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUriInput">primaryScriptUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionIntervalInput">retentionIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContentInput">scriptContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccountInput">storageAccountInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUrisInput">supportingScriptUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreference">cleanupPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLine">commandLine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTag">forceUpdateTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUri">primaryScriptUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionInterval">retentionInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContent">scriptContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUris">supportingScriptUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.container"></a>

```java
public ResourceDeploymentScriptAzureCliContainerOutputReference getContainer();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference">ResourceDeploymentScriptAzureCliContainerOutputReference</a>

---

##### `environmentVariable`<sup>Required</sup> <a name="environmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariable"></a>

```java
public ResourceDeploymentScriptAzureCliEnvironmentVariableList getEnvironmentVariable();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList">ResourceDeploymentScriptAzureCliEnvironmentVariableList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identity"></a>

```java
public ResourceDeploymentScriptAzureCliIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference">ResourceDeploymentScriptAzureCliIdentityOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.outputs"></a>

```java
public java.lang.String getOutputs();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccount"></a>

```java
public ResourceDeploymentScriptAzureCliStorageAccountOutputReference getStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference">ResourceDeploymentScriptAzureCliStorageAccountOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeouts"></a>

```java
public ResourceDeploymentScriptAzureCliTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference">ResourceDeploymentScriptAzureCliTimeoutsOutputReference</a>

---

##### `cleanupPreferenceInput`<sup>Optional</sup> <a name="cleanupPreferenceInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreferenceInput"></a>

```java
public java.lang.String getCleanupPreferenceInput();
```

- *Type:* java.lang.String

---

##### `commandLineInput`<sup>Optional</sup> <a name="commandLineInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLineInput"></a>

```java
public java.lang.String getCommandLineInput();
```

- *Type:* java.lang.String

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.containerInput"></a>

```java
public ResourceDeploymentScriptAzureCliContainer getContainerInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

---

##### `environmentVariableInput`<sup>Optional</sup> <a name="environmentVariableInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.environmentVariableInput"></a>

```java
public java.lang.Object getEnvironmentVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>>

---

##### `forceUpdateTagInput`<sup>Optional</sup> <a name="forceUpdateTagInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTagInput"></a>

```java
public java.lang.String getForceUpdateTagInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.identityInput"></a>

```java
public ResourceDeploymentScriptAzureCliIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryScriptUriInput`<sup>Optional</sup> <a name="primaryScriptUriInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUriInput"></a>

```java
public java.lang.String getPrimaryScriptUriInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retentionIntervalInput`<sup>Optional</sup> <a name="retentionIntervalInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionIntervalInput"></a>

```java
public java.lang.String getRetentionIntervalInput();
```

- *Type:* java.lang.String

---

##### `scriptContentInput`<sup>Optional</sup> <a name="scriptContentInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContentInput"></a>

```java
public java.lang.String getScriptContentInput();
```

- *Type:* java.lang.String

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.storageAccountInput"></a>

```java
public ResourceDeploymentScriptAzureCliStorageAccount getStorageAccountInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

---

##### `supportingScriptUrisInput`<sup>Optional</sup> <a name="supportingScriptUrisInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUrisInput"></a>

```java
public java.util.List<java.lang.String> getSupportingScriptUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `cleanupPreference`<sup>Required</sup> <a name="cleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.cleanupPreference"></a>

```java
public java.lang.String getCleanupPreference();
```

- *Type:* java.lang.String

---

##### `commandLine`<sup>Required</sup> <a name="commandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.commandLine"></a>

```java
public java.lang.String getCommandLine();
```

- *Type:* java.lang.String

---

##### `forceUpdateTag`<sup>Required</sup> <a name="forceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.forceUpdateTag"></a>

```java
public java.lang.String getForceUpdateTag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryScriptUri`<sup>Required</sup> <a name="primaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.primaryScriptUri"></a>

```java
public java.lang.String getPrimaryScriptUri();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.retentionInterval"></a>

```java
public java.lang.String getRetentionInterval();
```

- *Type:* java.lang.String

---

##### `scriptContent`<sup>Required</sup> <a name="scriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.scriptContent"></a>

```java
public java.lang.String getScriptContent();
```

- *Type:* java.lang.String

---

##### `supportingScriptUris`<sup>Required</sup> <a name="supportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.supportingScriptUris"></a>

```java
public java.util.List<java.lang.String> getSupportingScriptUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCli.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceDeploymentScriptAzureCliConfig <a name="ResourceDeploymentScriptAzureCliConfig" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliConfig;

ResourceDeploymentScriptAzureCliConfig.builder()
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
//  .container(ResourceDeploymentScriptAzureCliContainer)
//  .environmentVariable(IResolvable)
//  .environmentVariable(java.util.List<ResourceDeploymentScriptAzureCliEnvironmentVariable>)
//  .forceUpdateTag(java.lang.String)
//  .id(java.lang.String)
//  .identity(ResourceDeploymentScriptAzureCliIdentity)
//  .primaryScriptUri(java.lang.String)
//  .scriptContent(java.lang.String)
//  .storageAccount(ResourceDeploymentScriptAzureCliStorageAccount)
//  .supportingScriptUris(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeout(java.lang.String)
//  .timeouts(ResourceDeploymentScriptAzureCliTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.retentionInterval">retentionInterval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.cleanupPreference">cleanupPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.commandLine">commandLine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.environmentVariable">environmentVariable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>></code> | environment_variable block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forceUpdateTag">forceUpdateTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.primaryScriptUri">primaryScriptUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.scriptContent">scriptContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.storageAccount">storageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.supportingScriptUris">supportingScriptUris</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#location ResourceDeploymentScriptAzureCli#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#resource_group_name ResourceDeploymentScriptAzureCli#resource_group_name}.

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.retentionInterval"></a>

```java
public java.lang.String getRetentionInterval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#retention_interval ResourceDeploymentScriptAzureCli#retention_interval}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#version ResourceDeploymentScriptAzureCli#version}.

---

##### `cleanupPreference`<sup>Optional</sup> <a name="cleanupPreference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.cleanupPreference"></a>

```java
public java.lang.String getCleanupPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#cleanup_preference ResourceDeploymentScriptAzureCli#cleanup_preference}.

---

##### `commandLine`<sup>Optional</sup> <a name="commandLine" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.commandLine"></a>

```java
public java.lang.String getCommandLine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#command_line ResourceDeploymentScriptAzureCli#command_line}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.container"></a>

```java
public ResourceDeploymentScriptAzureCliContainer getContainer();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#container ResourceDeploymentScriptAzureCli#container}

---

##### `environmentVariable`<sup>Optional</sup> <a name="environmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.environmentVariable"></a>

```java
public java.lang.Object getEnvironmentVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>>

environment_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#environment_variable ResourceDeploymentScriptAzureCli#environment_variable}

---

##### `forceUpdateTag`<sup>Optional</sup> <a name="forceUpdateTag" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.forceUpdateTag"></a>

```java
public java.lang.String getForceUpdateTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#force_update_tag ResourceDeploymentScriptAzureCli#force_update_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#id ResourceDeploymentScriptAzureCli#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.identity"></a>

```java
public ResourceDeploymentScriptAzureCliIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#identity ResourceDeploymentScriptAzureCli#identity}

---

##### `primaryScriptUri`<sup>Optional</sup> <a name="primaryScriptUri" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.primaryScriptUri"></a>

```java
public java.lang.String getPrimaryScriptUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#primary_script_uri ResourceDeploymentScriptAzureCli#primary_script_uri}.

---

##### `scriptContent`<sup>Optional</sup> <a name="scriptContent" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.scriptContent"></a>

```java
public java.lang.String getScriptContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#script_content ResourceDeploymentScriptAzureCli#script_content}.

---

##### `storageAccount`<sup>Optional</sup> <a name="storageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.storageAccount"></a>

```java
public ResourceDeploymentScriptAzureCliStorageAccount getStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#storage_account ResourceDeploymentScriptAzureCli#storage_account}

---

##### `supportingScriptUris`<sup>Optional</sup> <a name="supportingScriptUris" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.supportingScriptUris"></a>

```java
public java.util.List<java.lang.String> getSupportingScriptUris();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#supporting_script_uris ResourceDeploymentScriptAzureCli#supporting_script_uris}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#tags ResourceDeploymentScriptAzureCli#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#timeout ResourceDeploymentScriptAzureCli#timeout}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliConfig.property.timeouts"></a>

```java
public ResourceDeploymentScriptAzureCliTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#timeouts ResourceDeploymentScriptAzureCli#timeouts}

---

### ResourceDeploymentScriptAzureCliContainer <a name="ResourceDeploymentScriptAzureCliContainer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliContainer;

ResourceDeploymentScriptAzureCliContainer.builder()
//  .containerGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer.property.containerGroupName">containerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#container_group_name ResourceDeploymentScriptAzureCli#container_group_name}. |

---

##### `containerGroupName`<sup>Optional</sup> <a name="containerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer.property.containerGroupName"></a>

```java
public java.lang.String getContainerGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#container_group_name ResourceDeploymentScriptAzureCli#container_group_name}.

---

### ResourceDeploymentScriptAzureCliEnvironmentVariable <a name="ResourceDeploymentScriptAzureCliEnvironmentVariable" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliEnvironmentVariable;

ResourceDeploymentScriptAzureCliEnvironmentVariable.builder()
    .name(java.lang.String)
//  .secureValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.secureValue">secureValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#secure_value ResourceDeploymentScriptAzureCli#secure_value}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#value ResourceDeploymentScriptAzureCli#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

##### `secureValue`<sup>Optional</sup> <a name="secureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.secureValue"></a>

```java
public java.lang.String getSecureValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#secure_value ResourceDeploymentScriptAzureCli#secure_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#value ResourceDeploymentScriptAzureCli#value}.

---

### ResourceDeploymentScriptAzureCliIdentity <a name="ResourceDeploymentScriptAzureCliIdentity" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliIdentity;

ResourceDeploymentScriptAzureCliIdentity.builder()
    .identityIds(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#identity_ids ResourceDeploymentScriptAzureCli#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#type ResourceDeploymentScriptAzureCli#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#identity_ids ResourceDeploymentScriptAzureCli#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#type ResourceDeploymentScriptAzureCli#type}.

---

### ResourceDeploymentScriptAzureCliStorageAccount <a name="ResourceDeploymentScriptAzureCliStorageAccount" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliStorageAccount;

ResourceDeploymentScriptAzureCliStorageAccount.builder()
    .key(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#key ResourceDeploymentScriptAzureCli#key}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#key ResourceDeploymentScriptAzureCli#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#name ResourceDeploymentScriptAzureCli#name}.

---

### ResourceDeploymentScriptAzureCliTimeouts <a name="ResourceDeploymentScriptAzureCliTimeouts" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliTimeouts;

ResourceDeploymentScriptAzureCliTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#create ResourceDeploymentScriptAzureCli#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#delete ResourceDeploymentScriptAzureCli#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#read ResourceDeploymentScriptAzureCli#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#update ResourceDeploymentScriptAzureCli#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#create ResourceDeploymentScriptAzureCli#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#delete ResourceDeploymentScriptAzureCli#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#read ResourceDeploymentScriptAzureCli#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/resource_deployment_script_azure_cli#update ResourceDeploymentScriptAzureCli#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceDeploymentScriptAzureCliContainerOutputReference <a name="ResourceDeploymentScriptAzureCliContainerOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliContainerOutputReference;

new ResourceDeploymentScriptAzureCliContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resetContainerGroupName">resetContainerGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerGroupName` <a name="resetContainerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.resetContainerGroupName"></a>

```java
public void resetContainerGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupNameInput">containerGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupName">containerGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerGroupNameInput`<sup>Optional</sup> <a name="containerGroupNameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupNameInput"></a>

```java
public java.lang.String getContainerGroupNameInput();
```

- *Type:* java.lang.String

---

##### `containerGroupName`<sup>Required</sup> <a name="containerGroupName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.containerGroupName"></a>

```java
public java.lang.String getContainerGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainerOutputReference.property.internalValue"></a>

```java
public ResourceDeploymentScriptAzureCliContainer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliContainer">ResourceDeploymentScriptAzureCliContainer</a>

---


### ResourceDeploymentScriptAzureCliEnvironmentVariableList <a name="ResourceDeploymentScriptAzureCliEnvironmentVariableList" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliEnvironmentVariableList;

new ResourceDeploymentScriptAzureCliEnvironmentVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.get"></a>

```java
public ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>>

---


### ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference <a name="ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference;

new ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetSecureValue">resetSecureValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecureValue` <a name="resetSecureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetSecureValue"></a>

```java
public void resetSecureValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValueInput">secureValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValue">secureValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secureValueInput`<sup>Optional</sup> <a name="secureValueInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValueInput"></a>

```java
public java.lang.String getSecureValueInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secureValue`<sup>Required</sup> <a name="secureValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.secureValue"></a>

```java
public java.lang.String getSecureValue();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliEnvironmentVariable">ResourceDeploymentScriptAzureCliEnvironmentVariable</a>

---


### ResourceDeploymentScriptAzureCliIdentityOutputReference <a name="ResourceDeploymentScriptAzureCliIdentityOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliIdentityOutputReference;

new ResourceDeploymentScriptAzureCliIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentityOutputReference.property.internalValue"></a>

```java
public ResourceDeploymentScriptAzureCliIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliIdentity">ResourceDeploymentScriptAzureCliIdentity</a>

---


### ResourceDeploymentScriptAzureCliStorageAccountOutputReference <a name="ResourceDeploymentScriptAzureCliStorageAccountOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference;

new ResourceDeploymentScriptAzureCliStorageAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccountOutputReference.property.internalValue"></a>

```java
public ResourceDeploymentScriptAzureCliStorageAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliStorageAccount">ResourceDeploymentScriptAzureCliStorageAccount</a>

---


### ResourceDeploymentScriptAzureCliTimeoutsOutputReference <a name="ResourceDeploymentScriptAzureCliTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.resource_deployment_script_azure_cli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference;

new ResourceDeploymentScriptAzureCliTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.resourceDeploymentScriptAzureCli.ResourceDeploymentScriptAzureCliTimeouts">ResourceDeploymentScriptAzureCliTimeouts</a>

---




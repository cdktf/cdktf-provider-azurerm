# `iothubEndpointCosmosdbAccount` Submodule <a name="`iothubEndpointCosmosdbAccount` Submodule" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointCosmosdbAccount <a name="IothubEndpointCosmosdbAccount" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account azurerm_iothub_endpoint_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_cosmosdb_account.IothubEndpointCosmosdbAccount;

IothubEndpointCosmosdbAccount.Builder.create(Construct scope, java.lang.String id)
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
    .containerName(java.lang.String)
    .databaseName(java.lang.String)
    .endpointUri(java.lang.String)
    .iothubId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .authenticationType(java.lang.String)
//  .id(java.lang.String)
//  .identityId(java.lang.String)
//  .partitionKeyName(java.lang.String)
//  .partitionKeyTemplate(java.lang.String)
//  .primaryKey(java.lang.String)
//  .secondaryKey(java.lang.String)
//  .timeouts(IothubEndpointCosmosdbAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#container_name IothubEndpointCosmosdbAccount#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#database_name IothubEndpointCosmosdbAccount#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#endpoint_uri IothubEndpointCosmosdbAccount#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#iothub_id IothubEndpointCosmosdbAccount#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#name IothubEndpointCosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#resource_group_name IothubEndpointCosmosdbAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#authentication_type IothubEndpointCosmosdbAccount#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#id IothubEndpointCosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#identity_id IothubEndpointCosmosdbAccount#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.partitionKeyName">partitionKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_name IothubEndpointCosmosdbAccount#partition_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.partitionKeyTemplate">partitionKeyTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_template IothubEndpointCosmosdbAccount#partition_key_template}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#primary_key IothubEndpointCosmosdbAccount#primary_key}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#secondary_key IothubEndpointCosmosdbAccount#secondary_key}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.containerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#container_name IothubEndpointCosmosdbAccount#container_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#database_name IothubEndpointCosmosdbAccount#database_name}.

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.endpointUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#endpoint_uri IothubEndpointCosmosdbAccount#endpoint_uri}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.iothubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#iothub_id IothubEndpointCosmosdbAccount#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#name IothubEndpointCosmosdbAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#resource_group_name IothubEndpointCosmosdbAccount#resource_group_name}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#authentication_type IothubEndpointCosmosdbAccount#authentication_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#id IothubEndpointCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.identityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#identity_id IothubEndpointCosmosdbAccount#identity_id}.

---

##### `partitionKeyName`<sup>Optional</sup> <a name="partitionKeyName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.partitionKeyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_name IothubEndpointCosmosdbAccount#partition_key_name}.

---

##### `partitionKeyTemplate`<sup>Optional</sup> <a name="partitionKeyTemplate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.partitionKeyTemplate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_template IothubEndpointCosmosdbAccount#partition_key_template}.

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.primaryKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#primary_key IothubEndpointCosmosdbAccount#primary_key}.

---

##### `secondaryKey`<sup>Optional</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.secondaryKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#secondary_key IothubEndpointCosmosdbAccount#secondary_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#timeouts IothubEndpointCosmosdbAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPartitionKeyName">resetPartitionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPartitionKeyTemplate">resetPartitionKeyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPrimaryKey">resetPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetSecondaryKey">resetSecondaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.putTimeouts"></a>

```java
public void putTimeouts(IothubEndpointCosmosdbAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetIdentityId"></a>

```java
public void resetIdentityId()
```

##### `resetPartitionKeyName` <a name="resetPartitionKeyName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPartitionKeyName"></a>

```java
public void resetPartitionKeyName()
```

##### `resetPartitionKeyTemplate` <a name="resetPartitionKeyTemplate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPartitionKeyTemplate"></a>

```java
public void resetPartitionKeyTemplate()
```

##### `resetPrimaryKey` <a name="resetPrimaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetPrimaryKey"></a>

```java
public void resetPrimaryKey()
```

##### `resetSecondaryKey` <a name="resetSecondaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetSecondaryKey"></a>

```java
public void resetSecondaryKey()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IothubEndpointCosmosdbAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_cosmosdb_account.IothubEndpointCosmosdbAccount;

IothubEndpointCosmosdbAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_cosmosdb_account.IothubEndpointCosmosdbAccount;

IothubEndpointCosmosdbAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_cosmosdb_account.IothubEndpointCosmosdbAccount;

IothubEndpointCosmosdbAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_cosmosdb_account.IothubEndpointCosmosdbAccount;

IothubEndpointCosmosdbAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IothubEndpointCosmosdbAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IothubEndpointCosmosdbAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IothubEndpointCosmosdbAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IothubEndpointCosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IothubEndpointCosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference">IothubEndpointCosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.endpointUriInput">endpointUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.identityIdInput">identityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.iothubIdInput">iothubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyNameInput">partitionKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyTemplateInput">partitionKeyTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.primaryKeyInput">primaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.secondaryKeyInput">secondaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.identityId">identityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyName">partitionKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyTemplate">partitionKeyTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.timeouts"></a>

```java
public IothubEndpointCosmosdbAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference">IothubEndpointCosmosdbAccountTimeoutsOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.endpointUriInput"></a>

```java
public java.lang.String getEndpointUriInput();
```

- *Type:* java.lang.String

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.identityIdInput"></a>

```java
public java.lang.String getIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.iothubIdInput"></a>

```java
public java.lang.String getIothubIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partitionKeyNameInput`<sup>Optional</sup> <a name="partitionKeyNameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyNameInput"></a>

```java
public java.lang.String getPartitionKeyNameInput();
```

- *Type:* java.lang.String

---

##### `partitionKeyTemplateInput`<sup>Optional</sup> <a name="partitionKeyTemplateInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyTemplateInput"></a>

```java
public java.lang.String getPartitionKeyTemplateInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.primaryKeyInput"></a>

```java
public java.lang.String getPrimaryKeyInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `secondaryKeyInput`<sup>Optional</sup> <a name="secondaryKeyInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.secondaryKeyInput"></a>

```java
public java.lang.String getSecondaryKeyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partitionKeyName`<sup>Required</sup> <a name="partitionKeyName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyName"></a>

```java
public java.lang.String getPartitionKeyName();
```

- *Type:* java.lang.String

---

##### `partitionKeyTemplate`<sup>Required</sup> <a name="partitionKeyTemplate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.partitionKeyTemplate"></a>

```java
public java.lang.String getPartitionKeyTemplate();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointCosmosdbAccountConfig <a name="IothubEndpointCosmosdbAccountConfig" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_cosmosdb_account.IothubEndpointCosmosdbAccountConfig;

IothubEndpointCosmosdbAccountConfig.builder()
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
    .containerName(java.lang.String)
    .databaseName(java.lang.String)
    .endpointUri(java.lang.String)
    .iothubId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .authenticationType(java.lang.String)
//  .id(java.lang.String)
//  .identityId(java.lang.String)
//  .partitionKeyName(java.lang.String)
//  .partitionKeyTemplate(java.lang.String)
//  .primaryKey(java.lang.String)
//  .secondaryKey(java.lang.String)
//  .timeouts(IothubEndpointCosmosdbAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#container_name IothubEndpointCosmosdbAccount#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#database_name IothubEndpointCosmosdbAccount#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#endpoint_uri IothubEndpointCosmosdbAccount#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#iothub_id IothubEndpointCosmosdbAccount#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#name IothubEndpointCosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#resource_group_name IothubEndpointCosmosdbAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#authentication_type IothubEndpointCosmosdbAccount#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#id IothubEndpointCosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#identity_id IothubEndpointCosmosdbAccount#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.partitionKeyName">partitionKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_name IothubEndpointCosmosdbAccount#partition_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.partitionKeyTemplate">partitionKeyTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_template IothubEndpointCosmosdbAccount#partition_key_template}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#primary_key IothubEndpointCosmosdbAccount#primary_key}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#secondary_key IothubEndpointCosmosdbAccount#secondary_key}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#container_name IothubEndpointCosmosdbAccount#container_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#database_name IothubEndpointCosmosdbAccount#database_name}.

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#endpoint_uri IothubEndpointCosmosdbAccount#endpoint_uri}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#iothub_id IothubEndpointCosmosdbAccount#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#name IothubEndpointCosmosdbAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#resource_group_name IothubEndpointCosmosdbAccount#resource_group_name}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#authentication_type IothubEndpointCosmosdbAccount#authentication_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#id IothubEndpointCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#identity_id IothubEndpointCosmosdbAccount#identity_id}.

---

##### `partitionKeyName`<sup>Optional</sup> <a name="partitionKeyName" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.partitionKeyName"></a>

```java
public java.lang.String getPartitionKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_name IothubEndpointCosmosdbAccount#partition_key_name}.

---

##### `partitionKeyTemplate`<sup>Optional</sup> <a name="partitionKeyTemplate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.partitionKeyTemplate"></a>

```java
public java.lang.String getPartitionKeyTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#partition_key_template IothubEndpointCosmosdbAccount#partition_key_template}.

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#primary_key IothubEndpointCosmosdbAccount#primary_key}.

---

##### `secondaryKey`<sup>Optional</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#secondary_key IothubEndpointCosmosdbAccount#secondary_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountConfig.property.timeouts"></a>

```java
public IothubEndpointCosmosdbAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#timeouts IothubEndpointCosmosdbAccount#timeouts}

---

### IothubEndpointCosmosdbAccountTimeouts <a name="IothubEndpointCosmosdbAccountTimeouts" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_cosmosdb_account.IothubEndpointCosmosdbAccountTimeouts;

IothubEndpointCosmosdbAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#create IothubEndpointCosmosdbAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#delete IothubEndpointCosmosdbAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#read IothubEndpointCosmosdbAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#update IothubEndpointCosmosdbAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#create IothubEndpointCosmosdbAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#delete IothubEndpointCosmosdbAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#read IothubEndpointCosmosdbAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/resources/iothub_endpoint_cosmosdb_account#update IothubEndpointCosmosdbAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointCosmosdbAccountTimeoutsOutputReference <a name="IothubEndpointCosmosdbAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_cosmosdb_account.IothubEndpointCosmosdbAccountTimeoutsOutputReference;

new IothubEndpointCosmosdbAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubEndpointCosmosdbAccount.IothubEndpointCosmosdbAccountTimeouts">IothubEndpointCosmosdbAccountTimeouts</a>

---




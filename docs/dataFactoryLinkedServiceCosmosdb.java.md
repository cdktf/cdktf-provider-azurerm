# `dataFactoryLinkedServiceCosmosdb` Submodule <a name="`dataFactoryLinkedServiceCosmosdb` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceCosmosdb <a name="DataFactoryLinkedServiceCosmosdb" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb azurerm_data_factory_linked_service_cosmosdb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb.DataFactoryLinkedServiceCosmosdb;

DataFactoryLinkedServiceCosmosdb.Builder.create(Construct scope, java.lang.String id)
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
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
//  .accountEndpoint(java.lang.String)
//  .accountKey(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .connectionString(java.lang.String)
//  .database(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataFactoryLinkedServiceCosmosdbTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#data_factory_id DataFactoryLinkedServiceCosmosdb#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#name DataFactoryLinkedServiceCosmosdb#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.accountEndpoint">accountEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#account_endpoint DataFactoryLinkedServiceCosmosdb#account_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#account_key DataFactoryLinkedServiceCosmosdb#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#additional_properties DataFactoryLinkedServiceCosmosdb#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#annotations DataFactoryLinkedServiceCosmosdb#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#connection_string DataFactoryLinkedServiceCosmosdb#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#database DataFactoryLinkedServiceCosmosdb#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#description DataFactoryLinkedServiceCosmosdb#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#id DataFactoryLinkedServiceCosmosdb#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#integration_runtime_name DataFactoryLinkedServiceCosmosdb#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#parameters DataFactoryLinkedServiceCosmosdb#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#data_factory_id DataFactoryLinkedServiceCosmosdb#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#name DataFactoryLinkedServiceCosmosdb#name}.

---

##### `accountEndpoint`<sup>Optional</sup> <a name="accountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.accountEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#account_endpoint DataFactoryLinkedServiceCosmosdb#account_endpoint}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.accountKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#account_key DataFactoryLinkedServiceCosmosdb#account_key}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#additional_properties DataFactoryLinkedServiceCosmosdb#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#annotations DataFactoryLinkedServiceCosmosdb#annotations}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#connection_string DataFactoryLinkedServiceCosmosdb#connection_string}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.database"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#database DataFactoryLinkedServiceCosmosdb#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#description DataFactoryLinkedServiceCosmosdb#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#id DataFactoryLinkedServiceCosmosdb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#integration_runtime_name DataFactoryLinkedServiceCosmosdb#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#parameters DataFactoryLinkedServiceCosmosdb#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#timeouts DataFactoryLinkedServiceCosmosdb#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountEndpoint">resetAccountEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryLinkedServiceCosmosdbTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

---

##### `resetAccountEndpoint` <a name="resetAccountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountEndpoint"></a>

```java
public void resetAccountEndpoint()
```

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAccountKey"></a>

```java
public void resetAccountKey()
```

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetIntegrationRuntimeName"></a>

```java
public void resetIntegrationRuntimeName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdb resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb.DataFactoryLinkedServiceCosmosdb;

DataFactoryLinkedServiceCosmosdb.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb.DataFactoryLinkedServiceCosmosdb;

DataFactoryLinkedServiceCosmosdb.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb.DataFactoryLinkedServiceCosmosdb;

DataFactoryLinkedServiceCosmosdb.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb.DataFactoryLinkedServiceCosmosdb;

DataFactoryLinkedServiceCosmosdb.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryLinkedServiceCosmosdb.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryLinkedServiceCosmosdb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryLinkedServiceCosmosdb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceCosmosdb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpointInput">accountEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKeyInput">accountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpoint">accountEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeouts"></a>

```java
public DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference</a>

---

##### `accountEndpointInput`<sup>Optional</sup> <a name="accountEndpointInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpointInput"></a>

```java
public java.lang.String getAccountEndpointInput();
```

- *Type:* java.lang.String

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKeyInput"></a>

```java
public java.lang.String getAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeNameInput"></a>

```java
public java.lang.String getIntegrationRuntimeNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

---

##### `accountEndpoint`<sup>Required</sup> <a name="accountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountEndpoint"></a>

```java
public java.lang.String getAccountEndpoint();
```

- *Type:* java.lang.String

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdb.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceCosmosdbConfig <a name="DataFactoryLinkedServiceCosmosdbConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb.DataFactoryLinkedServiceCosmosdbConfig;

DataFactoryLinkedServiceCosmosdbConfig.builder()
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
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
//  .accountEndpoint(java.lang.String)
//  .accountKey(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .connectionString(java.lang.String)
//  .database(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataFactoryLinkedServiceCosmosdbTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#data_factory_id DataFactoryLinkedServiceCosmosdb#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#name DataFactoryLinkedServiceCosmosdb#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountEndpoint">accountEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#account_endpoint DataFactoryLinkedServiceCosmosdb#account_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#account_key DataFactoryLinkedServiceCosmosdb#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#additional_properties DataFactoryLinkedServiceCosmosdb#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#annotations DataFactoryLinkedServiceCosmosdb#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#connection_string DataFactoryLinkedServiceCosmosdb#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#database DataFactoryLinkedServiceCosmosdb#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#description DataFactoryLinkedServiceCosmosdb#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#id DataFactoryLinkedServiceCosmosdb#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#integration_runtime_name DataFactoryLinkedServiceCosmosdb#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#parameters DataFactoryLinkedServiceCosmosdb#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#data_factory_id DataFactoryLinkedServiceCosmosdb#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#name DataFactoryLinkedServiceCosmosdb#name}.

---

##### `accountEndpoint`<sup>Optional</sup> <a name="accountEndpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountEndpoint"></a>

```java
public java.lang.String getAccountEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#account_endpoint DataFactoryLinkedServiceCosmosdb#account_endpoint}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#account_key DataFactoryLinkedServiceCosmosdb#account_key}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#additional_properties DataFactoryLinkedServiceCosmosdb#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#annotations DataFactoryLinkedServiceCosmosdb#annotations}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#connection_string DataFactoryLinkedServiceCosmosdb#connection_string}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#database DataFactoryLinkedServiceCosmosdb#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#description DataFactoryLinkedServiceCosmosdb#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#id DataFactoryLinkedServiceCosmosdb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#integration_runtime_name DataFactoryLinkedServiceCosmosdb#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#parameters DataFactoryLinkedServiceCosmosdb#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbConfig.property.timeouts"></a>

```java
public DataFactoryLinkedServiceCosmosdbTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#timeouts DataFactoryLinkedServiceCosmosdb#timeouts}

---

### DataFactoryLinkedServiceCosmosdbTimeouts <a name="DataFactoryLinkedServiceCosmosdbTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts;

DataFactoryLinkedServiceCosmosdbTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#create DataFactoryLinkedServiceCosmosdb#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#delete DataFactoryLinkedServiceCosmosdb#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#read DataFactoryLinkedServiceCosmosdb#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#update DataFactoryLinkedServiceCosmosdb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#create DataFactoryLinkedServiceCosmosdb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#delete DataFactoryLinkedServiceCosmosdb#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#read DataFactoryLinkedServiceCosmosdb#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/data_factory_linked_service_cosmosdb#update DataFactoryLinkedServiceCosmosdb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference <a name="DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference;

new DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdb.DataFactoryLinkedServiceCosmosdbTimeouts">DataFactoryLinkedServiceCosmosdbTimeouts</a>

---




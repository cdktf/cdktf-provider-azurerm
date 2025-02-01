# `dataFactoryLinkedServiceCosmosdbMongoapi` Submodule <a name="`dataFactoryLinkedServiceCosmosdbMongoapi` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceCosmosdbMongoapi <a name="DataFactoryLinkedServiceCosmosdbMongoapi" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi azurerm_data_factory_linked_service_cosmosdb_mongoapi}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb_mongoapi.DataFactoryLinkedServiceCosmosdbMongoapi;

DataFactoryLinkedServiceCosmosdbMongoapi.Builder.create(Construct scope, java.lang.String id)
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
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .connectionString(java.lang.String)
//  .database(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .serverVersionIs32OrHigher(java.lang.Boolean)
//  .serverVersionIs32OrHigher(IResolvable)
//  .timeouts(DataFactoryLinkedServiceCosmosdbMongoapiTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.serverVersionIs32OrHigher">serverVersionIs32OrHigher</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.database"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}.

---

##### `serverVersionIs32OrHigher`<sup>Optional</sup> <a name="serverVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.serverVersionIs32OrHigher"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#timeouts DataFactoryLinkedServiceCosmosdbMongoapi#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetServerVersionIs32OrHigher">resetServerVersionIs32OrHigher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryLinkedServiceCosmosdbMongoapiTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetIntegrationRuntimeName"></a>

```java
public void resetIntegrationRuntimeName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetServerVersionIs32OrHigher` <a name="resetServerVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetServerVersionIs32OrHigher"></a>

```java
public void resetServerVersionIs32OrHigher()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdbMongoapi resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb_mongoapi.DataFactoryLinkedServiceCosmosdbMongoapi;

DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb_mongoapi.DataFactoryLinkedServiceCosmosdbMongoapi;

DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb_mongoapi.DataFactoryLinkedServiceCosmosdbMongoapi;

DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb_mongoapi.DataFactoryLinkedServiceCosmosdbMongoapi;

DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdbMongoapi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryLinkedServiceCosmosdbMongoapi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryLinkedServiceCosmosdbMongoapi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceCosmosdbMongoapi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigherInput">serverVersionIs32OrHigherInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigher">serverVersionIs32OrHigher</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeouts"></a>

```java
public DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeNameInput"></a>

```java
public java.lang.String getIntegrationRuntimeNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serverVersionIs32OrHigherInput`<sup>Optional</sup> <a name="serverVersionIs32OrHigherInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigherInput"></a>

```java
public java.lang.Object getServerVersionIs32OrHigherInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serverVersionIs32OrHigher`<sup>Required</sup> <a name="serverVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigher"></a>

```java
public java.lang.Object getServerVersionIs32OrHigher();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceCosmosdbMongoapiConfig <a name="DataFactoryLinkedServiceCosmosdbMongoapiConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb_mongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig;

DataFactoryLinkedServiceCosmosdbMongoapiConfig.builder()
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
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .connectionString(java.lang.String)
//  .database(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .serverVersionIs32OrHigher(java.lang.Boolean)
//  .serverVersionIs32OrHigher(IResolvable)
//  .timeouts(DataFactoryLinkedServiceCosmosdbMongoapiTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.serverVersionIs32OrHigher">serverVersionIs32OrHigher</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}.

---

##### `serverVersionIs32OrHigher`<sup>Optional</sup> <a name="serverVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.serverVersionIs32OrHigher"></a>

```java
public java.lang.Object getServerVersionIs32OrHigher();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.timeouts"></a>

```java
public DataFactoryLinkedServiceCosmosdbMongoapiTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#timeouts DataFactoryLinkedServiceCosmosdbMongoapi#timeouts}

---

### DataFactoryLinkedServiceCosmosdbMongoapiTimeouts <a name="DataFactoryLinkedServiceCosmosdbMongoapiTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb_mongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts;

DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#create DataFactoryLinkedServiceCosmosdbMongoapi#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#delete DataFactoryLinkedServiceCosmosdbMongoapi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#read DataFactoryLinkedServiceCosmosdbMongoapi#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#update DataFactoryLinkedServiceCosmosdbMongoapi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#create DataFactoryLinkedServiceCosmosdbMongoapi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#delete DataFactoryLinkedServiceCosmosdbMongoapi#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#read DataFactoryLinkedServiceCosmosdbMongoapi#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#update DataFactoryLinkedServiceCosmosdbMongoapi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference <a name="DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_cosmosdb_mongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference;

new DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

---




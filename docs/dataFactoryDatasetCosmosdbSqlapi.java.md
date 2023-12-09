# `dataFactoryDatasetCosmosdbSqlapi` Submodule <a name="`dataFactoryDatasetCosmosdbSqlapi` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetCosmosdbSqlapi <a name="DataFactoryDatasetCosmosdbSqlapi" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi azurerm_data_factory_dataset_cosmosdb_sqlapi}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapi;

DataFactoryDatasetCosmosdbSqlapi.Builder.create(Construct scope, java.lang.String id)
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
    .linkedServiceName(java.lang.String)
    .name(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .collectionName(java.lang.String)
//  .description(java.lang.String)
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .schemaColumn(IResolvable)
//  .schemaColumn(java.util.List<DataFactoryDatasetCosmosdbSqlapiSchemaColumn>)
//  .timeouts(DataFactoryDatasetCosmosdbSqlapiTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.collectionName">collectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.schemaColumn">schemaColumn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>></code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}.

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.linkedServiceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}.

---

##### `collectionName`<sup>Optional</sup> <a name="collectionName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.collectionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.schemaColumn"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>>

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#schema_column DataFactoryDatasetCosmosdbSqlapi#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#timeouts DataFactoryDatasetCosmosdbSqlapi#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putSchemaColumn">putSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetCollectionName">resetCollectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetSchemaColumn">resetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchemaColumn` <a name="putSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putSchemaColumn"></a>

```java
public void putSchemaColumn(IResolvable OR java.util.List<DataFactoryDatasetCosmosdbSqlapiSchemaColumn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putSchemaColumn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryDatasetCosmosdbSqlapiTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetCollectionName` <a name="resetCollectionName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetCollectionName"></a>

```java
public void resetCollectionName()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetId"></a>

```java
public void resetId()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSchemaColumn` <a name="resetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetSchemaColumn"></a>

```java
public void resetSchemaColumn()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryDatasetCosmosdbSqlapi resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapi;

DataFactoryDatasetCosmosdbSqlapi.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapi;

DataFactoryDatasetCosmosdbSqlapi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapi;

DataFactoryDatasetCosmosdbSqlapi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapi;

DataFactoryDatasetCosmosdbSqlapi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryDatasetCosmosdbSqlapi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryDatasetCosmosdbSqlapi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryDatasetCosmosdbSqlapi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryDatasetCosmosdbSqlapi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetCosmosdbSqlapi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumn">schemaColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList">DataFactoryDatasetCosmosdbSqlapiSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference">DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionNameInput">collectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumnInput">schemaColumnInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionName">collectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `schemaColumn`<sup>Required</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumn"></a>

```java
public DataFactoryDatasetCosmosdbSqlapiSchemaColumnList getSchemaColumn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList">DataFactoryDatasetCosmosdbSqlapiSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeouts"></a>

```java
public DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference">DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `collectionNameInput`<sup>Optional</sup> <a name="collectionNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionNameInput"></a>

```java
public java.lang.String getCollectionNameInput();
```

- *Type:* java.lang.String

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceNameInput"></a>

```java
public java.lang.String getLinkedServiceNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schemaColumnInput`<sup>Optional</sup> <a name="schemaColumnInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumnInput"></a>

```java
public java.lang.Object getSchemaColumnInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `collectionName`<sup>Required</sup> <a name="collectionName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionName"></a>

```java
public java.lang.String getCollectionName();
```

- *Type:* java.lang.String

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceName"></a>

```java
public java.lang.String getLinkedServiceName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetCosmosdbSqlapiConfig <a name="DataFactoryDatasetCosmosdbSqlapiConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapiConfig;

DataFactoryDatasetCosmosdbSqlapiConfig.builder()
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
    .linkedServiceName(java.lang.String)
    .name(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .collectionName(java.lang.String)
//  .description(java.lang.String)
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .schemaColumn(IResolvable)
//  .schemaColumn(java.util.List<DataFactoryDatasetCosmosdbSqlapiSchemaColumn>)
//  .timeouts(DataFactoryDatasetCosmosdbSqlapiTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.collectionName">collectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.schemaColumn">schemaColumn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>></code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}.

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.linkedServiceName"></a>

```java
public java.lang.String getLinkedServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}.

---

##### `collectionName`<sup>Optional</sup> <a name="collectionName" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.collectionName"></a>

```java
public java.lang.String getCollectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.schemaColumn"></a>

```java
public java.lang.Object getSchemaColumn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>>

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#schema_column DataFactoryDatasetCosmosdbSqlapi#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.timeouts"></a>

```java
public DataFactoryDatasetCosmosdbSqlapiTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#timeouts DataFactoryDatasetCosmosdbSqlapi#timeouts}

---

### DataFactoryDatasetCosmosdbSqlapiSchemaColumn <a name="DataFactoryDatasetCosmosdbSqlapiSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn;

DataFactoryDatasetCosmosdbSqlapiSchemaColumn.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#type DataFactoryDatasetCosmosdbSqlapi#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#type DataFactoryDatasetCosmosdbSqlapi#type}.

---

### DataFactoryDatasetCosmosdbSqlapiTimeouts <a name="DataFactoryDatasetCosmosdbSqlapiTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts;

DataFactoryDatasetCosmosdbSqlapiTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#create DataFactoryDatasetCosmosdbSqlapi#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#delete DataFactoryDatasetCosmosdbSqlapi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#read DataFactoryDatasetCosmosdbSqlapi#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#update DataFactoryDatasetCosmosdbSqlapi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#create DataFactoryDatasetCosmosdbSqlapi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#delete DataFactoryDatasetCosmosdbSqlapi#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#read DataFactoryDatasetCosmosdbSqlapi#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/data_factory_dataset_cosmosdb_sqlapi#update DataFactoryDatasetCosmosdbSqlapi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetCosmosdbSqlapiSchemaColumnList <a name="DataFactoryDatasetCosmosdbSqlapiSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList;

new DataFactoryDatasetCosmosdbSqlapiSchemaColumnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.get"></a>

```java
public DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>>

---


### DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference <a name="DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference;

new DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>

---


### DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference <a name="DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_cosmosdb_sqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference;

new DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>

---




# `dataFactoryDatasetAzureSqlTable` Submodule <a name="`dataFactoryDatasetAzureSqlTable` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetAzureSqlTable <a name="DataFactoryDatasetAzureSqlTable" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table azurerm_data_factory_dataset_azure_sql_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTable;

DataFactoryDatasetAzureSqlTable.Builder.create(Construct scope, java.lang.String id)
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
    .linkedServiceId(java.lang.String)
    .name(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .schema(java.lang.String)
//  .schemaColumn(IResolvable)
//  .schemaColumn(java.util.List<DataFactoryDatasetAzureSqlTableSchemaColumn>)
//  .table(java.lang.String)
//  .timeouts(DataFactoryDatasetAzureSqlTableTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#data_factory_id DataFactoryDatasetAzureSqlTable#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.linkedServiceId">linkedServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#linked_service_id DataFactoryDatasetAzureSqlTable#linked_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#additional_properties DataFactoryDatasetAzureSqlTable#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#annotations DataFactoryDatasetAzureSqlTable#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#folder DataFactoryDatasetAzureSqlTable#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#id DataFactoryDatasetAzureSqlTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#parameters DataFactoryDatasetAzureSqlTable#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#schema DataFactoryDatasetAzureSqlTable#schema}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.schemaColumn">schemaColumn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>></code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.table">table</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#table DataFactoryDatasetAzureSqlTable#table}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#data_factory_id DataFactoryDatasetAzureSqlTable#data_factory_id}.

---

##### `linkedServiceId`<sup>Required</sup> <a name="linkedServiceId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.linkedServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#linked_service_id DataFactoryDatasetAzureSqlTable#linked_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#additional_properties DataFactoryDatasetAzureSqlTable#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#annotations DataFactoryDatasetAzureSqlTable#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#folder DataFactoryDatasetAzureSqlTable#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#id DataFactoryDatasetAzureSqlTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#parameters DataFactoryDatasetAzureSqlTable#parameters}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#schema DataFactoryDatasetAzureSqlTable#schema}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.schemaColumn"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>>

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#schema_column DataFactoryDatasetAzureSqlTable#schema_column}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.table"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#table DataFactoryDatasetAzureSqlTable#table}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#timeouts DataFactoryDatasetAzureSqlTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putSchemaColumn">putSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetSchemaColumn">resetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchemaColumn` <a name="putSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putSchemaColumn"></a>

```java
public void putSchemaColumn(IResolvable OR java.util.List<DataFactoryDatasetAzureSqlTableSchemaColumn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putSchemaColumn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryDatasetAzureSqlTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetId"></a>

```java
public void resetId()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetSchemaColumn` <a name="resetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetSchemaColumn"></a>

```java
public void resetSchemaColumn()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetTable"></a>

```java
public void resetTable()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryDatasetAzureSqlTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTable;

DataFactoryDatasetAzureSqlTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTable;

DataFactoryDatasetAzureSqlTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTable;

DataFactoryDatasetAzureSqlTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTable;

DataFactoryDatasetAzureSqlTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryDatasetAzureSqlTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryDatasetAzureSqlTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryDatasetAzureSqlTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryDatasetAzureSqlTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetAzureSqlTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaColumn">schemaColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList">DataFactoryDatasetAzureSqlTableSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference">DataFactoryDatasetAzureSqlTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.linkedServiceIdInput">linkedServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaColumnInput">schemaColumnInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.linkedServiceId">linkedServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `schemaColumn`<sup>Required</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaColumn"></a>

```java
public DataFactoryDatasetAzureSqlTableSchemaColumnList getSchemaColumn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList">DataFactoryDatasetAzureSqlTableSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.timeouts"></a>

```java
public DataFactoryDatasetAzureSqlTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference">DataFactoryDatasetAzureSqlTableTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkedServiceIdInput`<sup>Optional</sup> <a name="linkedServiceIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.linkedServiceIdInput"></a>

```java
public java.lang.String getLinkedServiceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schemaColumnInput`<sup>Optional</sup> <a name="schemaColumnInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaColumnInput"></a>

```java
public java.lang.Object getSchemaColumnInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedServiceId`<sup>Required</sup> <a name="linkedServiceId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.linkedServiceId"></a>

```java
public java.lang.String getLinkedServiceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetAzureSqlTableConfig <a name="DataFactoryDatasetAzureSqlTableConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTableConfig;

DataFactoryDatasetAzureSqlTableConfig.builder()
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
    .linkedServiceId(java.lang.String)
    .name(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .folder(java.lang.String)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .schema(java.lang.String)
//  .schemaColumn(IResolvable)
//  .schemaColumn(java.util.List<DataFactoryDatasetAzureSqlTableSchemaColumn>)
//  .table(java.lang.String)
//  .timeouts(DataFactoryDatasetAzureSqlTableTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#data_factory_id DataFactoryDatasetAzureSqlTable#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.linkedServiceId">linkedServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#linked_service_id DataFactoryDatasetAzureSqlTable#linked_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#additional_properties DataFactoryDatasetAzureSqlTable#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#annotations DataFactoryDatasetAzureSqlTable#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#folder DataFactoryDatasetAzureSqlTable#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#id DataFactoryDatasetAzureSqlTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#parameters DataFactoryDatasetAzureSqlTable#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#schema DataFactoryDatasetAzureSqlTable#schema}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.schemaColumn">schemaColumn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>></code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.table">table</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#table DataFactoryDatasetAzureSqlTable#table}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#data_factory_id DataFactoryDatasetAzureSqlTable#data_factory_id}.

---

##### `linkedServiceId`<sup>Required</sup> <a name="linkedServiceId" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.linkedServiceId"></a>

```java
public java.lang.String getLinkedServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#linked_service_id DataFactoryDatasetAzureSqlTable#linked_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#additional_properties DataFactoryDatasetAzureSqlTable#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#annotations DataFactoryDatasetAzureSqlTable#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#folder DataFactoryDatasetAzureSqlTable#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#id DataFactoryDatasetAzureSqlTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#parameters DataFactoryDatasetAzureSqlTable#parameters}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#schema DataFactoryDatasetAzureSqlTable#schema}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.schemaColumn"></a>

```java
public java.lang.Object getSchemaColumn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>>

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#schema_column DataFactoryDatasetAzureSqlTable#schema_column}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#table DataFactoryDatasetAzureSqlTable#table}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.timeouts"></a>

```java
public DataFactoryDatasetAzureSqlTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#timeouts DataFactoryDatasetAzureSqlTable#timeouts}

---

### DataFactoryDatasetAzureSqlTableSchemaColumn <a name="DataFactoryDatasetAzureSqlTableSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTableSchemaColumn;

DataFactoryDatasetAzureSqlTableSchemaColumn.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#type DataFactoryDatasetAzureSqlTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#type DataFactoryDatasetAzureSqlTable#type}.

---

### DataFactoryDatasetAzureSqlTableTimeouts <a name="DataFactoryDatasetAzureSqlTableTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTableTimeouts;

DataFactoryDatasetAzureSqlTableTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#create DataFactoryDatasetAzureSqlTable#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#delete DataFactoryDatasetAzureSqlTable#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#read DataFactoryDatasetAzureSqlTable#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#update DataFactoryDatasetAzureSqlTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#create DataFactoryDatasetAzureSqlTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#delete DataFactoryDatasetAzureSqlTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#read DataFactoryDatasetAzureSqlTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/data_factory_dataset_azure_sql_table#update DataFactoryDatasetAzureSqlTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetAzureSqlTableSchemaColumnList <a name="DataFactoryDatasetAzureSqlTableSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTableSchemaColumnList;

new DataFactoryDatasetAzureSqlTableSchemaColumnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.get"></a>

```java
public DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>>

---


### DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference <a name="DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference;

new DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>

---


### DataFactoryDatasetAzureSqlTableTimeoutsOutputReference <a name="DataFactoryDatasetAzureSqlTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_azure_sql_table.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference;

new DataFactoryDatasetAzureSqlTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>

---




# `dataFactoryDatasetParquet` Submodule <a name="`dataFactoryDatasetParquet` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetParquet <a name="DataFactoryDatasetParquet" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet azurerm_data_factory_dataset_parquet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquet;

DataFactoryDatasetParquet.Builder.create(Construct scope, java.lang.String id)
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
//  .azureBlobFsLocation(DataFactoryDatasetParquetAzureBlobFsLocation)
//  .azureBlobStorageLocation(DataFactoryDatasetParquetAzureBlobStorageLocation)
//  .compressionCodec(java.lang.String)
//  .compressionLevel(java.lang.String)
//  .description(java.lang.String)
//  .folder(java.lang.String)
//  .httpServerLocation(DataFactoryDatasetParquetHttpServerLocation)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .schemaColumn(IResolvable)
//  .schemaColumn(java.util.List<DataFactoryDatasetParquetSchemaColumn>)
//  .timeouts(DataFactoryDatasetParquetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.azureBlobFsLocation">azureBlobFsLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation">DataFactoryDatasetParquetAzureBlobFsLocation</a></code> | azure_blob_fs_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.azureBlobStorageLocation">azureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.compressionCodec">compressionCodec</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.compressionLevel">compressionLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.httpServerLocation">httpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.schemaColumn">schemaColumn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>></code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}.

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.linkedServiceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}.

---

##### `azureBlobFsLocation`<sup>Optional</sup> <a name="azureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.azureBlobFsLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation">DataFactoryDatasetParquetAzureBlobFsLocation</a>

azure_blob_fs_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#azure_blob_fs_location DataFactoryDatasetParquet#azure_blob_fs_location}

---

##### `azureBlobStorageLocation`<sup>Optional</sup> <a name="azureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.azureBlobStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#azure_blob_storage_location DataFactoryDatasetParquet#azure_blob_storage_location}

---

##### `compressionCodec`<sup>Optional</sup> <a name="compressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.compressionCodec"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}.

---

##### `compressionLevel`<sup>Optional</sup> <a name="compressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.compressionLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}.

---

##### `httpServerLocation`<sup>Optional</sup> <a name="httpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.httpServerLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#http_server_location DataFactoryDatasetParquet#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.schemaColumn"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>>

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#schema_column DataFactoryDatasetParquet#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#timeouts DataFactoryDatasetParquet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobFsLocation">putAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation">putAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation">putHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putSchemaColumn">putSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAzureBlobFsLocation">resetAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAzureBlobStorageLocation">resetAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionCodec">resetCompressionCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionLevel">resetCompressionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetHttpServerLocation">resetHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetSchemaColumn">resetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureBlobFsLocation` <a name="putAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobFsLocation"></a>

```java
public void putAzureBlobFsLocation(DataFactoryDatasetParquetAzureBlobFsLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobFsLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation">DataFactoryDatasetParquetAzureBlobFsLocation</a>

---

##### `putAzureBlobStorageLocation` <a name="putAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation"></a>

```java
public void putAzureBlobStorageLocation(DataFactoryDatasetParquetAzureBlobStorageLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

---

##### `putHttpServerLocation` <a name="putHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation"></a>

```java
public void putHttpServerLocation(DataFactoryDatasetParquetHttpServerLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

---

##### `putSchemaColumn` <a name="putSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putSchemaColumn"></a>

```java
public void putSchemaColumn(IResolvable OR java.util.List<DataFactoryDatasetParquetSchemaColumn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putSchemaColumn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryDatasetParquetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAzureBlobFsLocation` <a name="resetAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAzureBlobFsLocation"></a>

```java
public void resetAzureBlobFsLocation()
```

##### `resetAzureBlobStorageLocation` <a name="resetAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAzureBlobStorageLocation"></a>

```java
public void resetAzureBlobStorageLocation()
```

##### `resetCompressionCodec` <a name="resetCompressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionCodec"></a>

```java
public void resetCompressionCodec()
```

##### `resetCompressionLevel` <a name="resetCompressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionLevel"></a>

```java
public void resetCompressionLevel()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetHttpServerLocation` <a name="resetHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetHttpServerLocation"></a>

```java
public void resetHttpServerLocation()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetId"></a>

```java
public void resetId()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSchemaColumn` <a name="resetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetSchemaColumn"></a>

```java
public void resetSchemaColumn()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryDatasetParquet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquet;

DataFactoryDatasetParquet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquet;

DataFactoryDatasetParquet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquet;

DataFactoryDatasetParquet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquet;

DataFactoryDatasetParquet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryDatasetParquet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryDatasetParquet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryDatasetParquet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryDatasetParquet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetParquet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobFsLocation">azureBlobFsLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference">DataFactoryDatasetParquetAzureBlobFsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocation">azureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference">DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocation">httpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference">DataFactoryDatasetParquetHttpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumn">schemaColumn</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList">DataFactoryDatasetParquetSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference">DataFactoryDatasetParquetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobFsLocationInput">azureBlobFsLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation">DataFactoryDatasetParquetAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocationInput">azureBlobStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodecInput">compressionCodecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevelInput">compressionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocationInput">httpServerLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumnInput">schemaColumnInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodec">compressionCodec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevel">compressionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azureBlobFsLocation`<sup>Required</sup> <a name="azureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobFsLocation"></a>

```java
public DataFactoryDatasetParquetAzureBlobFsLocationOutputReference getAzureBlobFsLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference">DataFactoryDatasetParquetAzureBlobFsLocationOutputReference</a>

---

##### `azureBlobStorageLocation`<sup>Required</sup> <a name="azureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocation"></a>

```java
public DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference getAzureBlobStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference">DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference</a>

---

##### `httpServerLocation`<sup>Required</sup> <a name="httpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocation"></a>

```java
public DataFactoryDatasetParquetHttpServerLocationOutputReference getHttpServerLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference">DataFactoryDatasetParquetHttpServerLocationOutputReference</a>

---

##### `schemaColumn`<sup>Required</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumn"></a>

```java
public DataFactoryDatasetParquetSchemaColumnList getSchemaColumn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList">DataFactoryDatasetParquetSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeouts"></a>

```java
public DataFactoryDatasetParquetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference">DataFactoryDatasetParquetTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `azureBlobFsLocationInput`<sup>Optional</sup> <a name="azureBlobFsLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobFsLocationInput"></a>

```java
public DataFactoryDatasetParquetAzureBlobFsLocation getAzureBlobFsLocationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation">DataFactoryDatasetParquetAzureBlobFsLocation</a>

---

##### `azureBlobStorageLocationInput`<sup>Optional</sup> <a name="azureBlobStorageLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocationInput"></a>

```java
public DataFactoryDatasetParquetAzureBlobStorageLocation getAzureBlobStorageLocationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

---

##### `compressionCodecInput`<sup>Optional</sup> <a name="compressionCodecInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodecInput"></a>

```java
public java.lang.String getCompressionCodecInput();
```

- *Type:* java.lang.String

---

##### `compressionLevelInput`<sup>Optional</sup> <a name="compressionLevelInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevelInput"></a>

```java
public java.lang.String getCompressionLevelInput();
```

- *Type:* java.lang.String

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `httpServerLocationInput`<sup>Optional</sup> <a name="httpServerLocationInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocationInput"></a>

```java
public DataFactoryDatasetParquetHttpServerLocation getHttpServerLocationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceNameInput"></a>

```java
public java.lang.String getLinkedServiceNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schemaColumnInput`<sup>Optional</sup> <a name="schemaColumnInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumnInput"></a>

```java
public java.lang.Object getSchemaColumnInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compressionCodec`<sup>Required</sup> <a name="compressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodec"></a>

```java
public java.lang.String getCompressionCodec();
```

- *Type:* java.lang.String

---

##### `compressionLevel`<sup>Required</sup> <a name="compressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevel"></a>

```java
public java.lang.String getCompressionLevel();
```

- *Type:* java.lang.String

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceName"></a>

```java
public java.lang.String getLinkedServiceName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetParquetAzureBlobFsLocation <a name="DataFactoryDatasetParquetAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetAzureBlobFsLocation;

DataFactoryDatasetParquetAzureBlobFsLocation.builder()
//  .dynamicFilenameEnabled(java.lang.Boolean)
//  .dynamicFilenameEnabled(IResolvable)
//  .dynamicFileSystemEnabled(java.lang.Boolean)
//  .dynamicFileSystemEnabled(IResolvable)
//  .dynamicPathEnabled(java.lang.Boolean)
//  .dynamicPathEnabled(IResolvable)
//  .filename(java.lang.String)
//  .fileSystem(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.dynamicFileSystemEnabled">dynamicFileSystemEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_file_system_enabled DataFactoryDatasetParquet#dynamic_file_system_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.fileSystem">fileSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#file_system DataFactoryDatasetParquet#file_system}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}. |

---

##### `dynamicFilenameEnabled`<sup>Optional</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.dynamicFilenameEnabled"></a>

```java
public java.lang.Object getDynamicFilenameEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}.

---

##### `dynamicFileSystemEnabled`<sup>Optional</sup> <a name="dynamicFileSystemEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.dynamicFileSystemEnabled"></a>

```java
public java.lang.Object getDynamicFileSystemEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_file_system_enabled DataFactoryDatasetParquet#dynamic_file_system_enabled}.

---

##### `dynamicPathEnabled`<sup>Optional</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.dynamicPathEnabled"></a>

```java
public java.lang.Object getDynamicPathEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}.

---

##### `fileSystem`<sup>Optional</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.fileSystem"></a>

```java
public java.lang.String getFileSystem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#file_system DataFactoryDatasetParquet#file_system}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}.

---

### DataFactoryDatasetParquetAzureBlobStorageLocation <a name="DataFactoryDatasetParquetAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetAzureBlobStorageLocation;

DataFactoryDatasetParquetAzureBlobStorageLocation.builder()
    .container(java.lang.String)
//  .dynamicContainerEnabled(java.lang.Boolean)
//  .dynamicContainerEnabled(IResolvable)
//  .dynamicFilenameEnabled(java.lang.Boolean)
//  .dynamicFilenameEnabled(IResolvable)
//  .dynamicPathEnabled(java.lang.Boolean)
//  .dynamicPathEnabled(IResolvable)
//  .filename(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.container">container</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#container DataFactoryDatasetParquet#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicContainerEnabled">dynamicContainerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_container_enabled DataFactoryDatasetParquet#dynamic_container_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#container DataFactoryDatasetParquet#container}.

---

##### `dynamicContainerEnabled`<sup>Optional</sup> <a name="dynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicContainerEnabled"></a>

```java
public java.lang.Object getDynamicContainerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_container_enabled DataFactoryDatasetParquet#dynamic_container_enabled}.

---

##### `dynamicFilenameEnabled`<sup>Optional</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicFilenameEnabled"></a>

```java
public java.lang.Object getDynamicFilenameEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}.

---

##### `dynamicPathEnabled`<sup>Optional</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicPathEnabled"></a>

```java
public java.lang.Object getDynamicPathEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}.

---

### DataFactoryDatasetParquetConfig <a name="DataFactoryDatasetParquetConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetConfig;

DataFactoryDatasetParquetConfig.builder()
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
//  .azureBlobFsLocation(DataFactoryDatasetParquetAzureBlobFsLocation)
//  .azureBlobStorageLocation(DataFactoryDatasetParquetAzureBlobStorageLocation)
//  .compressionCodec(java.lang.String)
//  .compressionLevel(java.lang.String)
//  .description(java.lang.String)
//  .folder(java.lang.String)
//  .httpServerLocation(DataFactoryDatasetParquetHttpServerLocation)
//  .id(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .schemaColumn(IResolvable)
//  .schemaColumn(java.util.List<DataFactoryDatasetParquetSchemaColumn>)
//  .timeouts(DataFactoryDatasetParquetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.azureBlobFsLocation">azureBlobFsLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation">DataFactoryDatasetParquetAzureBlobFsLocation</a></code> | azure_blob_fs_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.azureBlobStorageLocation">azureBlobStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionCodec">compressionCodec</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionLevel">compressionLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.httpServerLocation">httpServerLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.schemaColumn">schemaColumn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>></code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}.

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.linkedServiceName"></a>

```java
public java.lang.String getLinkedServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}.

---

##### `azureBlobFsLocation`<sup>Optional</sup> <a name="azureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.azureBlobFsLocation"></a>

```java
public DataFactoryDatasetParquetAzureBlobFsLocation getAzureBlobFsLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation">DataFactoryDatasetParquetAzureBlobFsLocation</a>

azure_blob_fs_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#azure_blob_fs_location DataFactoryDatasetParquet#azure_blob_fs_location}

---

##### `azureBlobStorageLocation`<sup>Optional</sup> <a name="azureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.azureBlobStorageLocation"></a>

```java
public DataFactoryDatasetParquetAzureBlobStorageLocation getAzureBlobStorageLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#azure_blob_storage_location DataFactoryDatasetParquet#azure_blob_storage_location}

---

##### `compressionCodec`<sup>Optional</sup> <a name="compressionCodec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionCodec"></a>

```java
public java.lang.String getCompressionCodec();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}.

---

##### `compressionLevel`<sup>Optional</sup> <a name="compressionLevel" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionLevel"></a>

```java
public java.lang.String getCompressionLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}.

---

##### `httpServerLocation`<sup>Optional</sup> <a name="httpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.httpServerLocation"></a>

```java
public DataFactoryDatasetParquetHttpServerLocation getHttpServerLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#http_server_location DataFactoryDatasetParquet#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}.

---

##### `schemaColumn`<sup>Optional</sup> <a name="schemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.schemaColumn"></a>

```java
public java.lang.Object getSchemaColumn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>>

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#schema_column DataFactoryDatasetParquet#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.timeouts"></a>

```java
public DataFactoryDatasetParquetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#timeouts DataFactoryDatasetParquet#timeouts}

---

### DataFactoryDatasetParquetHttpServerLocation <a name="DataFactoryDatasetParquetHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetHttpServerLocation;

DataFactoryDatasetParquetHttpServerLocation.builder()
    .filename(java.lang.String)
    .relativeUrl(java.lang.String)
//  .dynamicFilenameEnabled(java.lang.Boolean)
//  .dynamicFilenameEnabled(IResolvable)
//  .dynamicPathEnabled(java.lang.Boolean)
//  .dynamicPathEnabled(IResolvable)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.relativeUrl">relativeUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#relative_url DataFactoryDatasetParquet#relative_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}.

---

##### `relativeUrl`<sup>Required</sup> <a name="relativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.relativeUrl"></a>

```java
public java.lang.String getRelativeUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#relative_url DataFactoryDatasetParquet#relative_url}.

---

##### `dynamicFilenameEnabled`<sup>Optional</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicFilenameEnabled"></a>

```java
public java.lang.Object getDynamicFilenameEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}.

---

##### `dynamicPathEnabled`<sup>Optional</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicPathEnabled"></a>

```java
public java.lang.Object getDynamicPathEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}.

---

### DataFactoryDatasetParquetSchemaColumn <a name="DataFactoryDatasetParquetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetSchemaColumn;

DataFactoryDatasetParquetSchemaColumn.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#type DataFactoryDatasetParquet#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#type DataFactoryDatasetParquet#type}.

---

### DataFactoryDatasetParquetTimeouts <a name="DataFactoryDatasetParquetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetTimeouts;

DataFactoryDatasetParquetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#create DataFactoryDatasetParquet#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#delete DataFactoryDatasetParquet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#read DataFactoryDatasetParquet#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#update DataFactoryDatasetParquet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#create DataFactoryDatasetParquet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#delete DataFactoryDatasetParquet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#read DataFactoryDatasetParquet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/data_factory_dataset_parquet#update DataFactoryDatasetParquet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetParquetAzureBlobFsLocationOutputReference <a name="DataFactoryDatasetParquetAzureBlobFsLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference;

new DataFactoryDatasetParquetAzureBlobFsLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetDynamicFilenameEnabled">resetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetDynamicFileSystemEnabled">resetDynamicFileSystemEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetDynamicPathEnabled">resetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetFileSystem">resetFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicFilenameEnabled` <a name="resetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetDynamicFilenameEnabled"></a>

```java
public void resetDynamicFilenameEnabled()
```

##### `resetDynamicFileSystemEnabled` <a name="resetDynamicFileSystemEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetDynamicFileSystemEnabled"></a>

```java
public void resetDynamicFileSystemEnabled()
```

##### `resetDynamicPathEnabled` <a name="resetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetDynamicPathEnabled"></a>

```java
public void resetDynamicPathEnabled()
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetFilename"></a>

```java
public void resetFilename()
```

##### `resetFileSystem` <a name="resetFileSystem" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetFileSystem"></a>

```java
public void resetFileSystem()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabledInput">dynamicFilenameEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabledInput">dynamicFileSystemEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicPathEnabledInput">dynamicPathEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.fileSystemInput">fileSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabled">dynamicFileSystemEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.fileSystem">fileSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation">DataFactoryDatasetParquetAzureBlobFsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicFilenameEnabledInput`<sup>Optional</sup> <a name="dynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```java
public java.lang.Object getDynamicFilenameEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicFileSystemEnabledInput`<sup>Optional</sup> <a name="dynamicFileSystemEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabledInput"></a>

```java
public java.lang.Object getDynamicFileSystemEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicPathEnabledInput`<sup>Optional</sup> <a name="dynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicPathEnabledInput"></a>

```java
public java.lang.Object getDynamicPathEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `fileSystemInput`<sup>Optional</sup> <a name="fileSystemInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.fileSystemInput"></a>

```java
public java.lang.String getFileSystemInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `dynamicFilenameEnabled`<sup>Required</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabled"></a>

```java
public java.lang.Object getDynamicFilenameEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicFileSystemEnabled`<sup>Required</sup> <a name="dynamicFileSystemEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabled"></a>

```java
public java.lang.Object getDynamicFileSystemEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicPathEnabled`<sup>Required</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.dynamicPathEnabled"></a>

```java
public java.lang.Object getDynamicPathEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `fileSystem`<sup>Required</sup> <a name="fileSystem" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.fileSystem"></a>

```java
public java.lang.String getFileSystem();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocationOutputReference.property.internalValue"></a>

```java
public DataFactoryDatasetParquetAzureBlobFsLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobFsLocation">DataFactoryDatasetParquetAzureBlobFsLocation</a>

---


### DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference <a name="DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference;

new DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled">resetDynamicContainerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled">resetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled">resetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicContainerEnabled` <a name="resetDynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled"></a>

```java
public void resetDynamicContainerEnabled()
```

##### `resetDynamicFilenameEnabled` <a name="resetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled"></a>

```java
public void resetDynamicFilenameEnabled()
```

##### `resetDynamicPathEnabled` <a name="resetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled"></a>

```java
public void resetDynamicPathEnabled()
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetFilename"></a>

```java
public void resetFilename()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput">dynamicContainerEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput">dynamicFilenameEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput">dynamicPathEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled">dynamicContainerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `dynamicContainerEnabledInput`<sup>Optional</sup> <a name="dynamicContainerEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput"></a>

```java
public java.lang.Object getDynamicContainerEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicFilenameEnabledInput`<sup>Optional</sup> <a name="dynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```java
public java.lang.Object getDynamicFilenameEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicPathEnabledInput`<sup>Optional</sup> <a name="dynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput"></a>

```java
public java.lang.Object getDynamicPathEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `dynamicContainerEnabled`<sup>Required</sup> <a name="dynamicContainerEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled"></a>

```java
public java.lang.Object getDynamicContainerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicFilenameEnabled`<sup>Required</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled"></a>

```java
public java.lang.Object getDynamicFilenameEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicPathEnabled`<sup>Required</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled"></a>

```java
public java.lang.Object getDynamicPathEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.internalValue"></a>

```java
public DataFactoryDatasetParquetAzureBlobStorageLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

---


### DataFactoryDatasetParquetHttpServerLocationOutputReference <a name="DataFactoryDatasetParquetHttpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetHttpServerLocationOutputReference;

new DataFactoryDatasetParquetHttpServerLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicFilenameEnabled">resetDynamicFilenameEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicPathEnabled">resetDynamicPathEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicFilenameEnabled` <a name="resetDynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```java
public void resetDynamicFilenameEnabled()
```

##### `resetDynamicPathEnabled` <a name="resetDynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```java
public void resetDynamicPathEnabled()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput">dynamicFilenameEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabledInput">dynamicPathEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrlInput">relativeUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabled">dynamicFilenameEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabled">dynamicPathEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrl">relativeUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicFilenameEnabledInput`<sup>Optional</sup> <a name="dynamicFilenameEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```java
public java.lang.Object getDynamicFilenameEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicPathEnabledInput`<sup>Optional</sup> <a name="dynamicPathEnabledInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```java
public java.lang.Object getDynamicPathEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `relativeUrlInput`<sup>Optional</sup> <a name="relativeUrlInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrlInput"></a>

```java
public java.lang.String getRelativeUrlInput();
```

- *Type:* java.lang.String

---

##### `dynamicFilenameEnabled`<sup>Required</sup> <a name="dynamicFilenameEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```java
public java.lang.Object getDynamicFilenameEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dynamicPathEnabled`<sup>Required</sup> <a name="dynamicPathEnabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```java
public java.lang.Object getDynamicPathEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `relativeUrl`<sup>Required</sup> <a name="relativeUrl" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrl"></a>

```java
public java.lang.String getRelativeUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.internalValue"></a>

```java
public DataFactoryDatasetParquetHttpServerLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

---


### DataFactoryDatasetParquetSchemaColumnList <a name="DataFactoryDatasetParquetSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetSchemaColumnList;

new DataFactoryDatasetParquetSchemaColumnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.get"></a>

```java
public DataFactoryDatasetParquetSchemaColumnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>>

---


### DataFactoryDatasetParquetSchemaColumnOutputReference <a name="DataFactoryDatasetParquetSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetSchemaColumnOutputReference;

new DataFactoryDatasetParquetSchemaColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>

---


### DataFactoryDatasetParquetTimeoutsOutputReference <a name="DataFactoryDatasetParquetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_dataset_parquet.DataFactoryDatasetParquetTimeoutsOutputReference;

new DataFactoryDatasetParquetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

---




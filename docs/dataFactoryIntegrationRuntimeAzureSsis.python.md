# `dataFactoryIntegrationRuntimeAzureSsis` Submodule <a name="`dataFactoryIntegrationRuntimeAzureSsis` Submodule" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryIntegrationRuntimeAzureSsis <a name="DataFactoryIntegrationRuntimeAzureSsis" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis azurerm_data_factory_integration_runtime_azure_ssis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  location: str,
  name: str,
  node_size: str,
  catalog_info: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo = None,
  copy_compute_scale: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale = None,
  credential_name: str = None,
  custom_setup_script: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript = None,
  description: str = None,
  edition: str = None,
  express_custom_setup: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup = None,
  express_vnet_integration: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration = None,
  id: str = None,
  license_type: str = None,
  max_parallel_executions_per_node: typing.Union[int, float] = None,
  number_of_nodes: typing.Union[int, float] = None,
  package_store: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisPackageStore]] = None,
  pipeline_external_compute_scale: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale = None,
  proxy: DataFactoryIntegrationRuntimeAzureSsisProxy = None,
  timeouts: DataFactoryIntegrationRuntimeAzureSsisTimeouts = None,
  vnet_integration: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_factory_id DataFactoryIntegrationRuntimeAzureSsis#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#location DataFactoryIntegrationRuntimeAzureSsis#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.nodeSize">node_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#node_size DataFactoryIntegrationRuntimeAzureSsis#node_size}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.catalogInfo">catalog_info</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a></code> | catalog_info block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.copyComputeScale">copy_compute_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a></code> | copy_compute_scale block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#credential_name DataFactoryIntegrationRuntimeAzureSsis#credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.customSetupScript">custom_setup_script</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a></code> | custom_setup_script block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#description DataFactoryIntegrationRuntimeAzureSsis#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#edition DataFactoryIntegrationRuntimeAzureSsis#edition}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.expressCustomSetup">express_custom_setup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a></code> | express_custom_setup block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.expressVnetIntegration">express_vnet_integration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a></code> | express_vnet_integration block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#id DataFactoryIntegrationRuntimeAzureSsis#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#license_type DataFactoryIntegrationRuntimeAzureSsis#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.maxParallelExecutionsPerNode">max_parallel_executions_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#max_parallel_executions_per_node DataFactoryIntegrationRuntimeAzureSsis#max_parallel_executions_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.packageStore">package_store</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]]</code> | package_store block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.pipelineExternalComputeScale">pipeline_external_compute_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a></code> | pipeline_external_compute_scale block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.vnetIntegration">vnet_integration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a></code> | vnet_integration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_factory_id DataFactoryIntegrationRuntimeAzureSsis#data_factory_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#location DataFactoryIntegrationRuntimeAzureSsis#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}.

---

##### `node_size`<sup>Required</sup> <a name="node_size" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.nodeSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#node_size DataFactoryIntegrationRuntimeAzureSsis#node_size}.

---

##### `catalog_info`<sup>Optional</sup> <a name="catalog_info" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.catalogInfo"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a>

catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#catalog_info DataFactoryIntegrationRuntimeAzureSsis#catalog_info}

---

##### `copy_compute_scale`<sup>Optional</sup> <a name="copy_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.copyComputeScale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a>

copy_compute_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#copy_compute_scale DataFactoryIntegrationRuntimeAzureSsis#copy_compute_scale}

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.credentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#credential_name DataFactoryIntegrationRuntimeAzureSsis#credential_name}.

---

##### `custom_setup_script`<sup>Optional</sup> <a name="custom_setup_script" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.customSetupScript"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a>

custom_setup_script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#custom_setup_script DataFactoryIntegrationRuntimeAzureSsis#custom_setup_script}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#description DataFactoryIntegrationRuntimeAzureSsis#description}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.edition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#edition DataFactoryIntegrationRuntimeAzureSsis#edition}.

---

##### `express_custom_setup`<sup>Optional</sup> <a name="express_custom_setup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.expressCustomSetup"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a>

express_custom_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#express_custom_setup DataFactoryIntegrationRuntimeAzureSsis#express_custom_setup}

---

##### `express_vnet_integration`<sup>Optional</sup> <a name="express_vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.expressVnetIntegration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a>

express_vnet_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#express_vnet_integration DataFactoryIntegrationRuntimeAzureSsis#express_vnet_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#id DataFactoryIntegrationRuntimeAzureSsis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.licenseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#license_type DataFactoryIntegrationRuntimeAzureSsis#license_type}.

---

##### `max_parallel_executions_per_node`<sup>Optional</sup> <a name="max_parallel_executions_per_node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.maxParallelExecutionsPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#max_parallel_executions_per_node DataFactoryIntegrationRuntimeAzureSsis#max_parallel_executions_per_node}.

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_nodes}.

---

##### `package_store`<sup>Optional</sup> <a name="package_store" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.packageStore"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]]

package_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#package_store DataFactoryIntegrationRuntimeAzureSsis#package_store}

---

##### `pipeline_external_compute_scale`<sup>Optional</sup> <a name="pipeline_external_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.pipelineExternalComputeScale"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a>

pipeline_external_compute_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#pipeline_external_compute_scale DataFactoryIntegrationRuntimeAzureSsis#pipeline_external_compute_scale}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.proxy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#proxy DataFactoryIntegrationRuntimeAzureSsis#proxy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#timeouts DataFactoryIntegrationRuntimeAzureSsis#timeouts}

---

##### `vnet_integration`<sup>Optional</sup> <a name="vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.Initializer.parameter.vnetIntegration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a>

vnet_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_integration DataFactoryIntegrationRuntimeAzureSsis#vnet_integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo">put_catalog_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCopyComputeScale">put_copy_compute_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCustomSetupScript">put_custom_setup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressCustomSetup">put_express_custom_setup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressVnetIntegration">put_express_vnet_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPackageStore">put_package_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPipelineExternalComputeScale">put_pipeline_external_compute_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putProxy">put_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putVnetIntegration">put_vnet_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCatalogInfo">reset_catalog_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCopyComputeScale">reset_copy_compute_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCredentialName">reset_credential_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCustomSetupScript">reset_custom_setup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetExpressCustomSetup">reset_express_custom_setup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetExpressVnetIntegration">reset_express_vnet_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetLicenseType">reset_license_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetMaxParallelExecutionsPerNode">reset_max_parallel_executions_per_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetNumberOfNodes">reset_number_of_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetPackageStore">reset_package_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetPipelineExternalComputeScale">reset_pipeline_external_compute_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetProxy">reset_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetVnetIntegration">reset_vnet_integration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_catalog_info` <a name="put_catalog_info" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo"></a>

```python
def put_catalog_info(
  server_endpoint: str,
  administrator_login: str = None,
  administrator_password: str = None,
  dual_standby_pair_name: str = None,
  elastic_pool_name: str = None,
  pricing_tier: str = None
) -> None
```

###### `server_endpoint`<sup>Required</sup> <a name="server_endpoint" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo.parameter.serverEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#server_endpoint DataFactoryIntegrationRuntimeAzureSsis#server_endpoint}.

---

###### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo.parameter.administratorLogin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_login DataFactoryIntegrationRuntimeAzureSsis#administrator_login}.

---

###### `administrator_password`<sup>Optional</sup> <a name="administrator_password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo.parameter.administratorPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_password DataFactoryIntegrationRuntimeAzureSsis#administrator_password}.

---

###### `dual_standby_pair_name`<sup>Optional</sup> <a name="dual_standby_pair_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo.parameter.dualStandbyPairName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#dual_standby_pair_name DataFactoryIntegrationRuntimeAzureSsis#dual_standby_pair_name}.

---

###### `elastic_pool_name`<sup>Optional</sup> <a name="elastic_pool_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo.parameter.elasticPoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#elastic_pool_name DataFactoryIntegrationRuntimeAzureSsis#elastic_pool_name}.

---

###### `pricing_tier`<sup>Optional</sup> <a name="pricing_tier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCatalogInfo.parameter.pricingTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#pricing_tier DataFactoryIntegrationRuntimeAzureSsis#pricing_tier}.

---

##### `put_copy_compute_scale` <a name="put_copy_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCopyComputeScale"></a>

```python
def put_copy_compute_scale(
  data_integration_unit: typing.Union[int, float] = None,
  time_to_live: typing.Union[int, float] = None
) -> None
```

###### `data_integration_unit`<sup>Optional</sup> <a name="data_integration_unit" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCopyComputeScale.parameter.dataIntegrationUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_integration_unit DataFactoryIntegrationRuntimeAzureSsis#data_integration_unit}.

---

###### `time_to_live`<sup>Optional</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCopyComputeScale.parameter.timeToLive"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}.

---

##### `put_custom_setup_script` <a name="put_custom_setup_script" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCustomSetupScript"></a>

```python
def put_custom_setup_script(
  blob_container_uri: str,
  sas_token: str
) -> None
```

###### `blob_container_uri`<sup>Required</sup> <a name="blob_container_uri" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCustomSetupScript.parameter.blobContainerUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#blob_container_uri DataFactoryIntegrationRuntimeAzureSsis#blob_container_uri}.

---

###### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putCustomSetupScript.parameter.sasToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#sas_token DataFactoryIntegrationRuntimeAzureSsis#sas_token}.

---

##### `put_express_custom_setup` <a name="put_express_custom_setup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressCustomSetup"></a>

```python
def put_express_custom_setup(
  command_key: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey]] = None,
  component: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent]] = None,
  environment: typing.Mapping[str] = None,
  powershell_version: str = None
) -> None
```

###### `command_key`<sup>Optional</sup> <a name="command_key" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressCustomSetup.parameter.commandKey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]]

command_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#command_key DataFactoryIntegrationRuntimeAzureSsis#command_key}

---

###### `component`<sup>Optional</sup> <a name="component" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressCustomSetup.parameter.component"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]]

component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#component DataFactoryIntegrationRuntimeAzureSsis#component}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressCustomSetup.parameter.environment"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#environment DataFactoryIntegrationRuntimeAzureSsis#environment}.

---

###### `powershell_version`<sup>Optional</sup> <a name="powershell_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressCustomSetup.parameter.powershellVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#powershell_version DataFactoryIntegrationRuntimeAzureSsis#powershell_version}.

---

##### `put_express_vnet_integration` <a name="put_express_vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressVnetIntegration"></a>

```python
def put_express_vnet_integration(
  subnet_id: str
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putExpressVnetIntegration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}.

---

##### `put_package_store` <a name="put_package_store" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPackageStore"></a>

```python
def put_package_store(
  value: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisPackageStore]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPackageStore.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]]

---

##### `put_pipeline_external_compute_scale` <a name="put_pipeline_external_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPipelineExternalComputeScale"></a>

```python
def put_pipeline_external_compute_scale(
  number_of_external_nodes: typing.Union[int, float] = None,
  number_of_pipeline_nodes: typing.Union[int, float] = None,
  time_to_live: typing.Union[int, float] = None
) -> None
```

###### `number_of_external_nodes`<sup>Optional</sup> <a name="number_of_external_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPipelineExternalComputeScale.parameter.numberOfExternalNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_external_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_external_nodes}.

---

###### `number_of_pipeline_nodes`<sup>Optional</sup> <a name="number_of_pipeline_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPipelineExternalComputeScale.parameter.numberOfPipelineNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_pipeline_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_pipeline_nodes}.

---

###### `time_to_live`<sup>Optional</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putPipelineExternalComputeScale.parameter.timeToLive"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}.

---

##### `put_proxy` <a name="put_proxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putProxy"></a>

```python
def put_proxy(
  self_hosted_integration_runtime_name: str,
  staging_storage_linked_service_name: str,
  path: str = None
) -> None
```

###### `self_hosted_integration_runtime_name`<sup>Required</sup> <a name="self_hosted_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putProxy.parameter.selfHostedIntegrationRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#self_hosted_integration_runtime_name DataFactoryIntegrationRuntimeAzureSsis#self_hosted_integration_runtime_name}.

---

###### `staging_storage_linked_service_name`<sup>Required</sup> <a name="staging_storage_linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putProxy.parameter.stagingStorageLinkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#staging_storage_linked_service_name DataFactoryIntegrationRuntimeAzureSsis#staging_storage_linked_service_name}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putProxy.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#path DataFactoryIntegrationRuntimeAzureSsis#path}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#create DataFactoryIntegrationRuntimeAzureSsis#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#delete DataFactoryIntegrationRuntimeAzureSsis#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#read DataFactoryIntegrationRuntimeAzureSsis#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#update DataFactoryIntegrationRuntimeAzureSsis#update}.

---

##### `put_vnet_integration` <a name="put_vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putVnetIntegration"></a>

```python
def put_vnet_integration(
  public_ips: typing.List[str] = None,
  subnet_id: str = None,
  subnet_name: str = None,
  vnet_id: str = None
) -> None
```

###### `public_ips`<sup>Optional</sup> <a name="public_ips" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putVnetIntegration.parameter.publicIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#public_ips DataFactoryIntegrationRuntimeAzureSsis#public_ips}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putVnetIntegration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}.

---

###### `subnet_name`<sup>Optional</sup> <a name="subnet_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putVnetIntegration.parameter.subnetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_name DataFactoryIntegrationRuntimeAzureSsis#subnet_name}.

---

###### `vnet_id`<sup>Optional</sup> <a name="vnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.putVnetIntegration.parameter.vnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_id DataFactoryIntegrationRuntimeAzureSsis#vnet_id}.

---

##### `reset_catalog_info` <a name="reset_catalog_info" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCatalogInfo"></a>

```python
def reset_catalog_info() -> None
```

##### `reset_copy_compute_scale` <a name="reset_copy_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCopyComputeScale"></a>

```python
def reset_copy_compute_scale() -> None
```

##### `reset_credential_name` <a name="reset_credential_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCredentialName"></a>

```python
def reset_credential_name() -> None
```

##### `reset_custom_setup_script` <a name="reset_custom_setup_script" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetCustomSetupScript"></a>

```python
def reset_custom_setup_script() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_express_custom_setup` <a name="reset_express_custom_setup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetExpressCustomSetup"></a>

```python
def reset_express_custom_setup() -> None
```

##### `reset_express_vnet_integration` <a name="reset_express_vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetExpressVnetIntegration"></a>

```python
def reset_express_vnet_integration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_type` <a name="reset_license_type" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetLicenseType"></a>

```python
def reset_license_type() -> None
```

##### `reset_max_parallel_executions_per_node` <a name="reset_max_parallel_executions_per_node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetMaxParallelExecutionsPerNode"></a>

```python
def reset_max_parallel_executions_per_node() -> None
```

##### `reset_number_of_nodes` <a name="reset_number_of_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetNumberOfNodes"></a>

```python
def reset_number_of_nodes() -> None
```

##### `reset_package_store` <a name="reset_package_store" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetPackageStore"></a>

```python
def reset_package_store() -> None
```

##### `reset_pipeline_external_compute_scale` <a name="reset_pipeline_external_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetPipelineExternalComputeScale"></a>

```python
def reset_pipeline_external_compute_scale() -> None
```

##### `reset_proxy` <a name="reset_proxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetProxy"></a>

```python
def reset_proxy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vnet_integration` <a name="reset_vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.resetVnetIntegration"></a>

```python
def reset_vnet_integration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryIntegrationRuntimeAzureSsis resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryIntegrationRuntimeAzureSsis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryIntegrationRuntimeAzureSsis to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryIntegrationRuntimeAzureSsis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryIntegrationRuntimeAzureSsis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.catalogInfo">catalog_info</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference">DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.copyComputeScale">copy_compute_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.customSetupScript">custom_setup_script</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressCustomSetup">express_custom_setup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressVnetIntegration">express_vnet_integration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.packageStore">package_store</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList">DataFactoryIntegrationRuntimeAzureSsisPackageStoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.pipelineExternalComputeScale">pipeline_external_compute_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference">DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.vnetIntegration">vnet_integration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.catalogInfoInput">catalog_info_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.copyComputeScaleInput">copy_compute_scale_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.customSetupScriptInput">custom_setup_script_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressCustomSetupInput">express_custom_setup_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressVnetIntegrationInput">express_vnet_integration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.maxParallelExecutionsPerNodeInput">max_parallel_executions_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nodeSizeInput">node_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.packageStoreInput">package_store_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.pipelineExternalComputeScaleInput">pipeline_external_compute_scale_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.proxyInput">proxy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.vnetIntegrationInput">vnet_integration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.maxParallelExecutionsPerNode">max_parallel_executions_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nodeSize">node_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_info`<sup>Required</sup> <a name="catalog_info" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.catalogInfo"></a>

```python
catalog_info: DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference">DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference</a>

---

##### `copy_compute_scale`<sup>Required</sup> <a name="copy_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.copyComputeScale"></a>

```python
copy_compute_scale: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference</a>

---

##### `custom_setup_script`<sup>Required</sup> <a name="custom_setup_script" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.customSetupScript"></a>

```python
custom_setup_script: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference</a>

---

##### `express_custom_setup`<sup>Required</sup> <a name="express_custom_setup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressCustomSetup"></a>

```python
express_custom_setup: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference</a>

---

##### `express_vnet_integration`<sup>Required</sup> <a name="express_vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressVnetIntegration"></a>

```python
express_vnet_integration: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference</a>

---

##### `package_store`<sup>Required</sup> <a name="package_store" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.packageStore"></a>

```python
package_store: DataFactoryIntegrationRuntimeAzureSsisPackageStoreList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList">DataFactoryIntegrationRuntimeAzureSsisPackageStoreList</a>

---

##### `pipeline_external_compute_scale`<sup>Required</sup> <a name="pipeline_external_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.pipelineExternalComputeScale"></a>

```python
pipeline_external_compute_scale: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.proxy"></a>

```python
proxy: DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference">DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.timeouts"></a>

```python
timeouts: DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference">DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference</a>

---

##### `vnet_integration`<sup>Required</sup> <a name="vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.vnetIntegration"></a>

```python
vnet_integration: DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference">DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference</a>

---

##### `catalog_info_input`<sup>Optional</sup> <a name="catalog_info_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.catalogInfoInput"></a>

```python
catalog_info_input: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a>

---

##### `copy_compute_scale_input`<sup>Optional</sup> <a name="copy_compute_scale_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.copyComputeScaleInput"></a>

```python
copy_compute_scale_input: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a>

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `custom_setup_script_input`<sup>Optional</sup> <a name="custom_setup_script_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.customSetupScriptInput"></a>

```python
custom_setup_script_input: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a>

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `express_custom_setup_input`<sup>Optional</sup> <a name="express_custom_setup_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressCustomSetupInput"></a>

```python
express_custom_setup_input: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a>

---

##### `express_vnet_integration_input`<sup>Optional</sup> <a name="express_vnet_integration_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.expressVnetIntegrationInput"></a>

```python
express_vnet_integration_input: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_parallel_executions_per_node_input`<sup>Optional</sup> <a name="max_parallel_executions_per_node_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.maxParallelExecutionsPerNodeInput"></a>

```python
max_parallel_executions_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_size_input`<sup>Optional</sup> <a name="node_size_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nodeSizeInput"></a>

```python
node_size_input: str
```

- *Type:* str

---

##### `number_of_nodes_input`<sup>Optional</sup> <a name="number_of_nodes_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.numberOfNodesInput"></a>

```python
number_of_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `package_store_input`<sup>Optional</sup> <a name="package_store_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.packageStoreInput"></a>

```python
package_store_input: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisPackageStore]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]]

---

##### `pipeline_external_compute_scale_input`<sup>Optional</sup> <a name="pipeline_external_compute_scale_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.pipelineExternalComputeScaleInput"></a>

```python
pipeline_external_compute_scale_input: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a>

---

##### `proxy_input`<sup>Optional</sup> <a name="proxy_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.proxyInput"></a>

```python
proxy_input: DataFactoryIntegrationRuntimeAzureSsisProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryIntegrationRuntimeAzureSsisTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a>]

---

##### `vnet_integration_input`<sup>Optional</sup> <a name="vnet_integration_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.vnetIntegrationInput"></a>

```python
vnet_integration_input: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a>

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_parallel_executions_per_node`<sup>Required</sup> <a name="max_parallel_executions_per_node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.maxParallelExecutionsPerNode"></a>

```python
max_parallel_executions_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_size`<sup>Required</sup> <a name="node_size" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.nodeSize"></a>

```python
node_size: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsis.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryIntegrationRuntimeAzureSsisCatalogInfo <a name="DataFactoryIntegrationRuntimeAzureSsisCatalogInfo" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo(
  server_endpoint: str,
  administrator_login: str = None,
  administrator_password: str = None,
  dual_standby_pair_name: str = None,
  elastic_pool_name: str = None,
  pricing_tier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.serverEndpoint">server_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#server_endpoint DataFactoryIntegrationRuntimeAzureSsis#server_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_login DataFactoryIntegrationRuntimeAzureSsis#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.administratorPassword">administrator_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_password DataFactoryIntegrationRuntimeAzureSsis#administrator_password}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.dualStandbyPairName">dual_standby_pair_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#dual_standby_pair_name DataFactoryIntegrationRuntimeAzureSsis#dual_standby_pair_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.elasticPoolName">elastic_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#elastic_pool_name DataFactoryIntegrationRuntimeAzureSsis#elastic_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.pricingTier">pricing_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#pricing_tier DataFactoryIntegrationRuntimeAzureSsis#pricing_tier}. |

---

##### `server_endpoint`<sup>Required</sup> <a name="server_endpoint" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.serverEndpoint"></a>

```python
server_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#server_endpoint DataFactoryIntegrationRuntimeAzureSsis#server_endpoint}.

---

##### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_login DataFactoryIntegrationRuntimeAzureSsis#administrator_login}.

---

##### `administrator_password`<sup>Optional</sup> <a name="administrator_password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.administratorPassword"></a>

```python
administrator_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#administrator_password DataFactoryIntegrationRuntimeAzureSsis#administrator_password}.

---

##### `dual_standby_pair_name`<sup>Optional</sup> <a name="dual_standby_pair_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.dualStandbyPairName"></a>

```python
dual_standby_pair_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#dual_standby_pair_name DataFactoryIntegrationRuntimeAzureSsis#dual_standby_pair_name}.

---

##### `elastic_pool_name`<sup>Optional</sup> <a name="elastic_pool_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.elasticPoolName"></a>

```python
elastic_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#elastic_pool_name DataFactoryIntegrationRuntimeAzureSsis#elastic_pool_name}.

---

##### `pricing_tier`<sup>Optional</sup> <a name="pricing_tier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo.property.pricingTier"></a>

```python
pricing_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#pricing_tier DataFactoryIntegrationRuntimeAzureSsis#pricing_tier}.

---

### DataFactoryIntegrationRuntimeAzureSsisConfig <a name="DataFactoryIntegrationRuntimeAzureSsisConfig" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  location: str,
  name: str,
  node_size: str,
  catalog_info: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo = None,
  copy_compute_scale: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale = None,
  credential_name: str = None,
  custom_setup_script: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript = None,
  description: str = None,
  edition: str = None,
  express_custom_setup: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup = None,
  express_vnet_integration: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration = None,
  id: str = None,
  license_type: str = None,
  max_parallel_executions_per_node: typing.Union[int, float] = None,
  number_of_nodes: typing.Union[int, float] = None,
  package_store: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisPackageStore]] = None,
  pipeline_external_compute_scale: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale = None,
  proxy: DataFactoryIntegrationRuntimeAzureSsisProxy = None,
  timeouts: DataFactoryIntegrationRuntimeAzureSsisTimeouts = None,
  vnet_integration: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_factory_id DataFactoryIntegrationRuntimeAzureSsis#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#location DataFactoryIntegrationRuntimeAzureSsis#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.nodeSize">node_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#node_size DataFactoryIntegrationRuntimeAzureSsis#node_size}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.catalogInfo">catalog_info</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a></code> | catalog_info block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.copyComputeScale">copy_compute_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a></code> | copy_compute_scale block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#credential_name DataFactoryIntegrationRuntimeAzureSsis#credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.customSetupScript">custom_setup_script</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a></code> | custom_setup_script block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#description DataFactoryIntegrationRuntimeAzureSsis#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#edition DataFactoryIntegrationRuntimeAzureSsis#edition}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.expressCustomSetup">express_custom_setup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a></code> | express_custom_setup block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.expressVnetIntegration">express_vnet_integration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a></code> | express_vnet_integration block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#id DataFactoryIntegrationRuntimeAzureSsis#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.licenseType">license_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#license_type DataFactoryIntegrationRuntimeAzureSsis#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.maxParallelExecutionsPerNode">max_parallel_executions_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#max_parallel_executions_per_node DataFactoryIntegrationRuntimeAzureSsis#max_parallel_executions_per_node}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.packageStore">package_store</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]]</code> | package_store block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.pipelineExternalComputeScale">pipeline_external_compute_scale</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a></code> | pipeline_external_compute_scale block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.vnetIntegration">vnet_integration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a></code> | vnet_integration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_factory_id DataFactoryIntegrationRuntimeAzureSsis#data_factory_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#location DataFactoryIntegrationRuntimeAzureSsis#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}.

---

##### `node_size`<sup>Required</sup> <a name="node_size" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.nodeSize"></a>

```python
node_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#node_size DataFactoryIntegrationRuntimeAzureSsis#node_size}.

---

##### `catalog_info`<sup>Optional</sup> <a name="catalog_info" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.catalogInfo"></a>

```python
catalog_info: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a>

catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#catalog_info DataFactoryIntegrationRuntimeAzureSsis#catalog_info}

---

##### `copy_compute_scale`<sup>Optional</sup> <a name="copy_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.copyComputeScale"></a>

```python
copy_compute_scale: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a>

copy_compute_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#copy_compute_scale DataFactoryIntegrationRuntimeAzureSsis#copy_compute_scale}

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#credential_name DataFactoryIntegrationRuntimeAzureSsis#credential_name}.

---

##### `custom_setup_script`<sup>Optional</sup> <a name="custom_setup_script" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.customSetupScript"></a>

```python
custom_setup_script: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a>

custom_setup_script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#custom_setup_script DataFactoryIntegrationRuntimeAzureSsis#custom_setup_script}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#description DataFactoryIntegrationRuntimeAzureSsis#description}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#edition DataFactoryIntegrationRuntimeAzureSsis#edition}.

---

##### `express_custom_setup`<sup>Optional</sup> <a name="express_custom_setup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.expressCustomSetup"></a>

```python
express_custom_setup: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a>

express_custom_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#express_custom_setup DataFactoryIntegrationRuntimeAzureSsis#express_custom_setup}

---

##### `express_vnet_integration`<sup>Optional</sup> <a name="express_vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.expressVnetIntegration"></a>

```python
express_vnet_integration: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a>

express_vnet_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#express_vnet_integration DataFactoryIntegrationRuntimeAzureSsis#express_vnet_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#id DataFactoryIntegrationRuntimeAzureSsis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_type`<sup>Optional</sup> <a name="license_type" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#license_type DataFactoryIntegrationRuntimeAzureSsis#license_type}.

---

##### `max_parallel_executions_per_node`<sup>Optional</sup> <a name="max_parallel_executions_per_node" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.maxParallelExecutionsPerNode"></a>

```python
max_parallel_executions_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#max_parallel_executions_per_node DataFactoryIntegrationRuntimeAzureSsis#max_parallel_executions_per_node}.

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_nodes}.

---

##### `package_store`<sup>Optional</sup> <a name="package_store" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.packageStore"></a>

```python
package_store: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisPackageStore]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]]

package_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#package_store DataFactoryIntegrationRuntimeAzureSsis#package_store}

---

##### `pipeline_external_compute_scale`<sup>Optional</sup> <a name="pipeline_external_compute_scale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.pipelineExternalComputeScale"></a>

```python
pipeline_external_compute_scale: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a>

pipeline_external_compute_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#pipeline_external_compute_scale DataFactoryIntegrationRuntimeAzureSsis#pipeline_external_compute_scale}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.proxy"></a>

```python
proxy: DataFactoryIntegrationRuntimeAzureSsisProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#proxy DataFactoryIntegrationRuntimeAzureSsis#proxy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.timeouts"></a>

```python
timeouts: DataFactoryIntegrationRuntimeAzureSsisTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#timeouts DataFactoryIntegrationRuntimeAzureSsis#timeouts}

---

##### `vnet_integration`<sup>Optional</sup> <a name="vnet_integration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisConfig.property.vnetIntegration"></a>

```python
vnet_integration: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a>

vnet_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_integration DataFactoryIntegrationRuntimeAzureSsis#vnet_integration}

---

### DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale <a name="DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale(
  data_integration_unit: typing.Union[int, float] = None,
  time_to_live: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.property.dataIntegrationUnit">data_integration_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_integration_unit DataFactoryIntegrationRuntimeAzureSsis#data_integration_unit}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.property.timeToLive">time_to_live</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}. |

---

##### `data_integration_unit`<sup>Optional</sup> <a name="data_integration_unit" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.property.dataIntegrationUnit"></a>

```python
data_integration_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#data_integration_unit DataFactoryIntegrationRuntimeAzureSsis#data_integration_unit}.

---

##### `time_to_live`<sup>Optional</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale.property.timeToLive"></a>

```python
time_to_live: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}.

---

### DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript <a name="DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript(
  blob_container_uri: str,
  sas_token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.property.blobContainerUri">blob_container_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#blob_container_uri DataFactoryIntegrationRuntimeAzureSsis#blob_container_uri}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.property.sasToken">sas_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#sas_token DataFactoryIntegrationRuntimeAzureSsis#sas_token}. |

---

##### `blob_container_uri`<sup>Required</sup> <a name="blob_container_uri" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.property.blobContainerUri"></a>

```python
blob_container_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#blob_container_uri DataFactoryIntegrationRuntimeAzureSsis#blob_container_uri}.

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#sas_token DataFactoryIntegrationRuntimeAzureSsis#sas_token}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup(
  command_key: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey]] = None,
  component: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent]] = None,
  environment: typing.Mapping[str] = None,
  powershell_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.commandKey">command_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]]</code> | command_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.component">component</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]]</code> | component block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#environment DataFactoryIntegrationRuntimeAzureSsis#environment}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.powershellVersion">powershell_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#powershell_version DataFactoryIntegrationRuntimeAzureSsis#powershell_version}. |

---

##### `command_key`<sup>Optional</sup> <a name="command_key" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.commandKey"></a>

```python
command_key: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]]

command_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#command_key DataFactoryIntegrationRuntimeAzureSsis#command_key}

---

##### `component`<sup>Optional</sup> <a name="component" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.component"></a>

```python
component: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]]

component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#component DataFactoryIntegrationRuntimeAzureSsis#component}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#environment DataFactoryIntegrationRuntimeAzureSsis#environment}.

---

##### `powershell_version`<sup>Optional</sup> <a name="powershell_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup.property.powershellVersion"></a>

```python
powershell_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#powershell_version DataFactoryIntegrationRuntimeAzureSsis#powershell_version}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey(
  target_name: str,
  user_name: str,
  key_vault_password: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword = None,
  password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.targetName">target_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#target_name DataFactoryIntegrationRuntimeAzureSsis#target_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#user_name DataFactoryIntegrationRuntimeAzureSsis#user_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#password DataFactoryIntegrationRuntimeAzureSsis#password}. |

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#target_name DataFactoryIntegrationRuntimeAzureSsis#target_name}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#user_name DataFactoryIntegrationRuntimeAzureSsis#user_name}.

---

##### `key_vault_password`<sup>Optional</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.keyVaultPassword"></a>

```python
key_vault_password: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#key_vault_password DataFactoryIntegrationRuntimeAzureSsis#key_vault_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#password DataFactoryIntegrationRuntimeAzureSsis#password}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword(
  linked_service_name: str,
  secret_name: str,
  parameters: typing.Mapping[str] = None,
  secret_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.secretVersion">secret_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}.

---

##### `secret_version`<sup>Optional</sup> <a name="secret_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent(
  name: str,
  key_vault_license: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense = None,
  license: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.keyVaultLicense">key_vault_license</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a></code> | key_vault_license block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.license">license</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#license DataFactoryIntegrationRuntimeAzureSsis#license}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}.

---

##### `key_vault_license`<sup>Optional</sup> <a name="key_vault_license" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.keyVaultLicense"></a>

```python
key_vault_license: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a>

key_vault_license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#key_vault_license DataFactoryIntegrationRuntimeAzureSsis#key_vault_license}

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent.property.license"></a>

```python
license: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#license DataFactoryIntegrationRuntimeAzureSsis#license}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense(
  linked_service_name: str,
  secret_name: str,
  parameters: typing.Mapping[str] = None,
  secret_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.secretVersion">secret_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}.

---

##### `secret_version`<sup>Optional</sup> <a name="secret_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}.

---

### DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration <a name="DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration(
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}.

---

### DataFactoryIntegrationRuntimeAzureSsisPackageStore <a name="DataFactoryIntegrationRuntimeAzureSsisPackageStore" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore(
  linked_service_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}.

---

### DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale <a name="DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale(
  number_of_external_nodes: typing.Union[int, float] = None,
  number_of_pipeline_nodes: typing.Union[int, float] = None,
  time_to_live: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.numberOfExternalNodes">number_of_external_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_external_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_external_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.numberOfPipelineNodes">number_of_pipeline_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_pipeline_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_pipeline_nodes}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.timeToLive">time_to_live</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}. |

---

##### `number_of_external_nodes`<sup>Optional</sup> <a name="number_of_external_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.numberOfExternalNodes"></a>

```python
number_of_external_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_external_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_external_nodes}.

---

##### `number_of_pipeline_nodes`<sup>Optional</sup> <a name="number_of_pipeline_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.numberOfPipelineNodes"></a>

```python
number_of_pipeline_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#number_of_pipeline_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_pipeline_nodes}.

---

##### `time_to_live`<sup>Optional</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale.property.timeToLive"></a>

```python
time_to_live: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#time_to_live DataFactoryIntegrationRuntimeAzureSsis#time_to_live}.

---

### DataFactoryIntegrationRuntimeAzureSsisProxy <a name="DataFactoryIntegrationRuntimeAzureSsisProxy" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy(
  self_hosted_integration_runtime_name: str,
  staging_storage_linked_service_name: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.selfHostedIntegrationRuntimeName">self_hosted_integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#self_hosted_integration_runtime_name DataFactoryIntegrationRuntimeAzureSsis#self_hosted_integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.stagingStorageLinkedServiceName">staging_storage_linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#staging_storage_linked_service_name DataFactoryIntegrationRuntimeAzureSsis#staging_storage_linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#path DataFactoryIntegrationRuntimeAzureSsis#path}. |

---

##### `self_hosted_integration_runtime_name`<sup>Required</sup> <a name="self_hosted_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.selfHostedIntegrationRuntimeName"></a>

```python
self_hosted_integration_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#self_hosted_integration_runtime_name DataFactoryIntegrationRuntimeAzureSsis#self_hosted_integration_runtime_name}.

---

##### `staging_storage_linked_service_name`<sup>Required</sup> <a name="staging_storage_linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.stagingStorageLinkedServiceName"></a>

```python
staging_storage_linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#staging_storage_linked_service_name DataFactoryIntegrationRuntimeAzureSsis#staging_storage_linked_service_name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#path DataFactoryIntegrationRuntimeAzureSsis#path}.

---

### DataFactoryIntegrationRuntimeAzureSsisTimeouts <a name="DataFactoryIntegrationRuntimeAzureSsisTimeouts" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#create DataFactoryIntegrationRuntimeAzureSsis#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#delete DataFactoryIntegrationRuntimeAzureSsis#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#read DataFactoryIntegrationRuntimeAzureSsis#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#update DataFactoryIntegrationRuntimeAzureSsis#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#create DataFactoryIntegrationRuntimeAzureSsis#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#delete DataFactoryIntegrationRuntimeAzureSsis#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#read DataFactoryIntegrationRuntimeAzureSsis#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#update DataFactoryIntegrationRuntimeAzureSsis#update}.

---

### DataFactoryIntegrationRuntimeAzureSsisVnetIntegration <a name="DataFactoryIntegrationRuntimeAzureSsisVnetIntegration" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration(
  public_ips: typing.List[str] = None,
  subnet_id: str = None,
  subnet_name: str = None,
  vnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.publicIps">public_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#public_ips DataFactoryIntegrationRuntimeAzureSsis#public_ips}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.subnetName">subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_name DataFactoryIntegrationRuntimeAzureSsis#subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.vnetId">vnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_id DataFactoryIntegrationRuntimeAzureSsis#vnet_id}. |

---

##### `public_ips`<sup>Optional</sup> <a name="public_ips" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.publicIps"></a>

```python
public_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#public_ips DataFactoryIntegrationRuntimeAzureSsis#public_ips}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}.

---

##### `subnet_name`<sup>Optional</sup> <a name="subnet_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#subnet_name DataFactoryIntegrationRuntimeAzureSsis#subnet_name}.

---

##### `vnet_id`<sup>Optional</sup> <a name="vnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration.property.vnetId"></a>

```python
vnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#vnet_id DataFactoryIntegrationRuntimeAzureSsis#vnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetAdministratorLogin">reset_administrator_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetAdministratorPassword">reset_administrator_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetDualStandbyPairName">reset_dual_standby_pair_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetElasticPoolName">reset_elastic_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetPricingTier">reset_pricing_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_administrator_login` <a name="reset_administrator_login" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetAdministratorLogin"></a>

```python
def reset_administrator_login() -> None
```

##### `reset_administrator_password` <a name="reset_administrator_password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetAdministratorPassword"></a>

```python
def reset_administrator_password() -> None
```

##### `reset_dual_standby_pair_name` <a name="reset_dual_standby_pair_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetDualStandbyPairName"></a>

```python
def reset_dual_standby_pair_name() -> None
```

##### `reset_elastic_pool_name` <a name="reset_elastic_pool_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetElasticPoolName"></a>

```python
def reset_elastic_pool_name() -> None
```

##### `reset_pricing_tier` <a name="reset_pricing_tier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.resetPricingTier"></a>

```python
def reset_pricing_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorLoginInput">administrator_login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorPasswordInput">administrator_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.dualStandbyPairNameInput">dual_standby_pair_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.elasticPoolNameInput">elastic_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.pricingTierInput">pricing_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.serverEndpointInput">server_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorLogin">administrator_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorPassword">administrator_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.dualStandbyPairName">dual_standby_pair_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.elasticPoolName">elastic_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.pricingTier">pricing_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.serverEndpoint">server_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `administrator_login_input`<sup>Optional</sup> <a name="administrator_login_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorLoginInput"></a>

```python
administrator_login_input: str
```

- *Type:* str

---

##### `administrator_password_input`<sup>Optional</sup> <a name="administrator_password_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorPasswordInput"></a>

```python
administrator_password_input: str
```

- *Type:* str

---

##### `dual_standby_pair_name_input`<sup>Optional</sup> <a name="dual_standby_pair_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.dualStandbyPairNameInput"></a>

```python
dual_standby_pair_name_input: str
```

- *Type:* str

---

##### `elastic_pool_name_input`<sup>Optional</sup> <a name="elastic_pool_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.elasticPoolNameInput"></a>

```python
elastic_pool_name_input: str
```

- *Type:* str

---

##### `pricing_tier_input`<sup>Optional</sup> <a name="pricing_tier_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.pricingTierInput"></a>

```python
pricing_tier_input: str
```

- *Type:* str

---

##### `server_endpoint_input`<sup>Optional</sup> <a name="server_endpoint_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.serverEndpointInput"></a>

```python
server_endpoint_input: str
```

- *Type:* str

---

##### `administrator_login`<sup>Required</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

---

##### `administrator_password`<sup>Required</sup> <a name="administrator_password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.administratorPassword"></a>

```python
administrator_password: str
```

- *Type:* str

---

##### `dual_standby_pair_name`<sup>Required</sup> <a name="dual_standby_pair_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.dualStandbyPairName"></a>

```python
dual_standby_pair_name: str
```

- *Type:* str

---

##### `elastic_pool_name`<sup>Required</sup> <a name="elastic_pool_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.elasticPoolName"></a>

```python
elastic_pool_name: str
```

- *Type:* str

---

##### `pricing_tier`<sup>Required</sup> <a name="pricing_tier" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.pricingTier"></a>

```python
pricing_tier: str
```

- *Type:* str

---

##### `server_endpoint`<sup>Required</sup> <a name="server_endpoint" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.serverEndpoint"></a>

```python
server_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCatalogInfo">DataFactoryIntegrationRuntimeAzureSsisCatalogInfo</a>

---


### DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resetDataIntegrationUnit">reset_data_integration_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resetTimeToLive">reset_time_to_live</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_integration_unit` <a name="reset_data_integration_unit" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resetDataIntegrationUnit"></a>

```python
def reset_data_integration_unit() -> None
```

##### `reset_time_to_live` <a name="reset_time_to_live" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.resetTimeToLive"></a>

```python
def reset_time_to_live() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.dataIntegrationUnitInput">data_integration_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.timeToLiveInput">time_to_live_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.dataIntegrationUnit">data_integration_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.timeToLive">time_to_live</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_integration_unit_input`<sup>Optional</sup> <a name="data_integration_unit_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.dataIntegrationUnitInput"></a>

```python
data_integration_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_to_live_input`<sup>Optional</sup> <a name="time_to_live_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.timeToLiveInput"></a>

```python
time_to_live_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_integration_unit`<sup>Required</sup> <a name="data_integration_unit" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.dataIntegrationUnit"></a>

```python
data_integration_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_to_live`<sup>Required</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.timeToLive"></a>

```python
time_to_live: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScaleOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale">DataFactoryIntegrationRuntimeAzureSsisCopyComputeScale</a>

---


### DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.blobContainerUriInput">blob_container_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.sasTokenInput">sas_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.blobContainerUri">blob_container_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.sasToken">sas_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blob_container_uri_input`<sup>Optional</sup> <a name="blob_container_uri_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.blobContainerUriInput"></a>

```python
blob_container_uri_input: str
```

- *Type:* str

---

##### `sas_token_input`<sup>Optional</sup> <a name="sas_token_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.sasTokenInput"></a>

```python
sas_token_input: str
```

- *Type:* str

---

##### `blob_container_uri`<sup>Required</sup> <a name="blob_container_uri" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.blobContainerUri"></a>

```python
blob_container_uri: str
```

- *Type:* str

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript">DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript</a>

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resetSecretVersion">reset_secret_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_secret_version` <a name="reset_secret_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.resetSecretVersion"></a>

```python
def reset_secret_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a>

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]]

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.putKeyVaultPassword">put_key_vault_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resetKeyVaultPassword">reset_key_vault_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resetPassword">reset_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_vault_password` <a name="put_key_vault_password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.putKeyVaultPassword"></a>

```python
def put_key_vault_password(
  linked_service_name: str,
  secret_name: str,
  parameters: typing.Mapping[str] = None,
  secret_version: str = None
) -> None
```

###### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.putKeyVaultPassword.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}.

---

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.putKeyVaultPassword.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.putKeyVaultPassword.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}.

---

###### `secret_version`<sup>Optional</sup> <a name="secret_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.putKeyVaultPassword.parameter.secretVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}.

---

##### `reset_key_vault_password` <a name="reset_key_vault_password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resetKeyVaultPassword"></a>

```python
def reset_key_vault_password() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.keyVaultPasswordInput">key_vault_password_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.targetNameInput">target_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_vault_password`<sup>Required</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.keyVaultPassword"></a>

```python
key_vault_password: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference</a>

---

##### `key_vault_password_input`<sup>Optional</sup> <a name="key_vault_password_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.keyVaultPasswordInput"></a>

```python
key_vault_password_input: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `target_name_input`<sup>Optional</sup> <a name="target_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.targetNameInput"></a>

```python
target_name_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resetSecretVersion">reset_secret_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_secret_version` <a name="reset_secret_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.resetSecretVersion"></a>

```python
def reset_secret_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a>

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]]

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.putKeyVaultLicense">put_key_vault_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resetKeyVaultLicense">reset_key_vault_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resetLicense">reset_license</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_vault_license` <a name="put_key_vault_license" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.putKeyVaultLicense"></a>

```python
def put_key_vault_license(
  linked_service_name: str,
  secret_name: str,
  parameters: typing.Mapping[str] = None,
  secret_version: str = None
) -> None
```

###### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.putKeyVaultLicense.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}.

---

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.putKeyVaultLicense.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.putKeyVaultLicense.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}.

---

###### `secret_version`<sup>Optional</sup> <a name="secret_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.putKeyVaultLicense.parameter.secretVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}.

---

##### `reset_key_vault_license` <a name="reset_key_vault_license" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resetKeyVaultLicense"></a>

```python
def reset_key_vault_license() -> None
```

##### `reset_license` <a name="reset_license" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.resetLicense"></a>

```python
def reset_license() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.keyVaultLicense">key_vault_license</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.keyVaultLicenseInput">key_vault_license_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.licenseInput">license_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.license">license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_vault_license`<sup>Required</sup> <a name="key_vault_license" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.keyVaultLicense"></a>

```python
key_vault_license: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference</a>

---

##### `key_vault_license_input`<sup>Optional</sup> <a name="key_vault_license_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.keyVaultLicenseInput"></a>

```python
key_vault_license_input: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense</a>

---

##### `license_input`<sup>Optional</sup> <a name="license_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.licenseInput"></a>

```python
license_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.license"></a>

```python
license: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]

---


### DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putCommandKey">put_command_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putComponent">put_component</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetCommandKey">reset_command_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetComponent">reset_component</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetPowershellVersion">reset_powershell_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_command_key` <a name="put_command_key" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putCommandKey"></a>

```python
def put_command_key(
  value: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putCommandKey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]]

---

##### `put_component` <a name="put_component" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putComponent"></a>

```python
def put_component(
  value: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.putComponent.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]]

---

##### `reset_command_key` <a name="reset_command_key" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetCommandKey"></a>

```python
def reset_command_key() -> None
```

##### `reset_component` <a name="reset_component" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetComponent"></a>

```python
def reset_component() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_powershell_version` <a name="reset_powershell_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.resetPowershellVersion"></a>

```python
def reset_powershell_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.commandKey">command_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.component">component</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.commandKeyInput">command_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.componentInput">component_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.environmentInput">environment_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.powershellVersionInput">powershell_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.environment">environment</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.powershellVersion">powershell_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_key`<sup>Required</sup> <a name="command_key" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.commandKey"></a>

```python
command_key: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyList</a>

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.component"></a>

```python
component: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentList</a>

---

##### `command_key_input`<sup>Optional</sup> <a name="command_key_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.commandKeyInput"></a>

```python
command_key_input: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey</a>]]

---

##### `component_input`<sup>Optional</sup> <a name="component_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.componentInput"></a>

```python
component_input: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent</a>]]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.environmentInput"></a>

```python
environment_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `powershell_version_input`<sup>Optional</sup> <a name="powershell_version_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.powershellVersionInput"></a>

```python
powershell_version_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.environment"></a>

```python
environment: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `powershell_version`<sup>Required</sup> <a name="powershell_version" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.powershellVersion"></a>

```python
powershell_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup">DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup</a>

---


### DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisExpressVnetIntegration</a>

---


### DataFactoryIntegrationRuntimeAzureSsisPackageStoreList <a name="DataFactoryIntegrationRuntimeAzureSsisPackageStoreList" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryIntegrationRuntimeAzureSsisPackageStore]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]]

---


### DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStoreOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryIntegrationRuntimeAzureSsisPackageStore]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPackageStore">DataFactoryIntegrationRuntimeAzureSsisPackageStore</a>]

---


### DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetNumberOfExternalNodes">reset_number_of_external_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetNumberOfPipelineNodes">reset_number_of_pipeline_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetTimeToLive">reset_time_to_live</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number_of_external_nodes` <a name="reset_number_of_external_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetNumberOfExternalNodes"></a>

```python
def reset_number_of_external_nodes() -> None
```

##### `reset_number_of_pipeline_nodes` <a name="reset_number_of_pipeline_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetNumberOfPipelineNodes"></a>

```python
def reset_number_of_pipeline_nodes() -> None
```

##### `reset_time_to_live` <a name="reset_time_to_live" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.resetTimeToLive"></a>

```python
def reset_time_to_live() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfExternalNodesInput">number_of_external_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfPipelineNodesInput">number_of_pipeline_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.timeToLiveInput">time_to_live_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfExternalNodes">number_of_external_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfPipelineNodes">number_of_pipeline_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.timeToLive">time_to_live</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_external_nodes_input`<sup>Optional</sup> <a name="number_of_external_nodes_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfExternalNodesInput"></a>

```python
number_of_external_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_pipeline_nodes_input`<sup>Optional</sup> <a name="number_of_pipeline_nodes_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfPipelineNodesInput"></a>

```python
number_of_pipeline_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_to_live_input`<sup>Optional</sup> <a name="time_to_live_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.timeToLiveInput"></a>

```python
time_to_live_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_external_nodes`<sup>Required</sup> <a name="number_of_external_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfExternalNodes"></a>

```python
number_of_external_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_pipeline_nodes`<sup>Required</sup> <a name="number_of_pipeline_nodes" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.numberOfPipelineNodes"></a>

```python
number_of_pipeline_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_to_live`<sup>Required</sup> <a name="time_to_live" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.timeToLive"></a>

```python
time_to_live: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScaleOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale">DataFactoryIntegrationRuntimeAzureSsisPipelineExternalComputeScale</a>

---


### DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.selfHostedIntegrationRuntimeNameInput">self_hosted_integration_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.stagingStorageLinkedServiceNameInput">staging_storage_linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.selfHostedIntegrationRuntimeName">self_hosted_integration_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.stagingStorageLinkedServiceName">staging_storage_linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `self_hosted_integration_runtime_name_input`<sup>Optional</sup> <a name="self_hosted_integration_runtime_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.selfHostedIntegrationRuntimeNameInput"></a>

```python
self_hosted_integration_runtime_name_input: str
```

- *Type:* str

---

##### `staging_storage_linked_service_name_input`<sup>Optional</sup> <a name="staging_storage_linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.stagingStorageLinkedServiceNameInput"></a>

```python
staging_storage_linked_service_name_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `self_hosted_integration_runtime_name`<sup>Required</sup> <a name="self_hosted_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.selfHostedIntegrationRuntimeName"></a>

```python
self_hosted_integration_runtime_name: str
```

- *Type:* str

---

##### `staging_storage_linked_service_name`<sup>Required</sup> <a name="staging_storage_linked_service_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.stagingStorageLinkedServiceName"></a>

```python
staging_storage_linked_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisProxy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisProxy">DataFactoryIntegrationRuntimeAzureSsisProxy</a>

---


### DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryIntegrationRuntimeAzureSsisTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisTimeouts">DataFactoryIntegrationRuntimeAzureSsisTimeouts</a>]

---


### DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference <a name="DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_integration_runtime_azure_ssis

dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetPublicIps">reset_public_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetSubnetName">reset_subnet_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetVnetId">reset_vnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_public_ips` <a name="reset_public_ips" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetPublicIps"></a>

```python
def reset_public_ips() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_subnet_name` <a name="reset_subnet_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetSubnetName"></a>

```python
def reset_subnet_name() -> None
```

##### `reset_vnet_id` <a name="reset_vnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.resetVnetId"></a>

```python
def reset_vnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.publicIpsInput">public_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetNameInput">subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.vnetIdInput">vnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.publicIps">public_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetName">subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.vnetId">vnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_ips_input`<sup>Optional</sup> <a name="public_ips_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.publicIpsInput"></a>

```python
public_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_name_input`<sup>Optional</sup> <a name="subnet_name_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetNameInput"></a>

```python
subnet_name_input: str
```

- *Type:* str

---

##### `vnet_id_input`<sup>Optional</sup> <a name="vnet_id_input" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.vnetIdInput"></a>

```python
vnet_id_input: str
```

- *Type:* str

---

##### `public_ips`<sup>Required</sup> <a name="public_ips" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.publicIps"></a>

```python
public_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subnet_name`<sup>Required</sup> <a name="subnet_name" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.subnetName"></a>

```python
subnet_name: str
```

- *Type:* str

---

##### `vnet_id`<sup>Required</sup> <a name="vnet_id" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.vnetId"></a>

```python
vnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryIntegrationRuntimeAzureSsis.DataFactoryIntegrationRuntimeAzureSsisVnetIntegration">DataFactoryIntegrationRuntimeAzureSsisVnetIntegration</a>

---




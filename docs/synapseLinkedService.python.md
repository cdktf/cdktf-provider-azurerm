# `synapseLinkedService` Submodule <a name="`synapseLinkedService` Submodule" id="@cdktf/provider-azurerm.synapseLinkedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseLinkedService <a name="SynapseLinkedService" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service azurerm_synapse_linked_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  synapse_workspace_id: str,
  type: str,
  type_properties_json: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  integration_runtime: SynapseLinkedServiceIntegrationRuntime = None,
  parameters: typing.Mapping[str] = None,
  timeouts: SynapseLinkedServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#name SynapseLinkedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#synapse_workspace_id SynapseLinkedService#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#type SynapseLinkedService#type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.typePropertiesJson">type_properties_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#type_properties_json SynapseLinkedService#type_properties_json}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#additional_properties SynapseLinkedService#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#annotations SynapseLinkedService#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#description SynapseLinkedService#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#id SynapseLinkedService#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.integrationRuntime">integration_runtime</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | integration_runtime block. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#name SynapseLinkedService#name}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#synapse_workspace_id SynapseLinkedService#synapse_workspace_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#type SynapseLinkedService#type}.

---

##### `type_properties_json`<sup>Required</sup> <a name="type_properties_json" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.typePropertiesJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#type_properties_json SynapseLinkedService#type_properties_json}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#additional_properties SynapseLinkedService#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#annotations SynapseLinkedService#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#description SynapseLinkedService#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#id SynapseLinkedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime`<sup>Optional</sup> <a name="integration_runtime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.integrationRuntime"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

integration_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#integration_runtime SynapseLinkedService#integration_runtime}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#timeouts SynapseLinkedService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime">put_integration_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetIntegrationRuntime">reset_integration_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_integration_runtime` <a name="put_integration_runtime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime"></a>

```python
def put_integration_runtime(
  name: str,
  parameters: typing.Mapping[str] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#name SynapseLinkedService#name}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#create SynapseLinkedService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#delete SynapseLinkedService#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#read SynapseLinkedService#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#update SynapseLinkedService#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_runtime` <a name="reset_integration_runtime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetIntegrationRuntime"></a>

```python
def reset_integration_runtime() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SynapseLinkedService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SynapseLinkedService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SynapseLinkedService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SynapseLinkedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SynapseLinkedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntime">integration_runtime</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference">SynapseLinkedServiceIntegrationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference">SynapseLinkedServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntimeInput">integration_runtime_input</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceIdInput">synapse_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJsonInput">type_properties_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJson">type_properties_json</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `integration_runtime`<sup>Required</sup> <a name="integration_runtime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntime"></a>

```python
integration_runtime: SynapseLinkedServiceIntegrationRuntimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference">SynapseLinkedServiceIntegrationRuntimeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeouts"></a>

```python
timeouts: SynapseLinkedServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference">SynapseLinkedServiceTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_runtime_input`<sup>Optional</sup> <a name="integration_runtime_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntimeInput"></a>

```python
integration_runtime_input: SynapseLinkedServiceIntegrationRuntime
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `synapse_workspace_id_input`<sup>Optional</sup> <a name="synapse_workspace_id_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceIdInput"></a>

```python
synapse_workspace_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SynapseLinkedServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_properties_json_input`<sup>Optional</sup> <a name="type_properties_json_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJsonInput"></a>

```python
type_properties_json_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_properties_json`<sup>Required</sup> <a name="type_properties_json" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJson"></a>

```python
type_properties_json: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseLinkedServiceConfig <a name="SynapseLinkedServiceConfig" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  synapse_workspace_id: str,
  type: str,
  type_properties_json: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  integration_runtime: SynapseLinkedServiceIntegrationRuntime = None,
  parameters: typing.Mapping[str] = None,
  timeouts: SynapseLinkedServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#name SynapseLinkedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.synapseWorkspaceId">synapse_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#synapse_workspace_id SynapseLinkedService#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#type SynapseLinkedService#type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.typePropertiesJson">type_properties_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#type_properties_json SynapseLinkedService#type_properties_json}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#additional_properties SynapseLinkedService#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#annotations SynapseLinkedService#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#description SynapseLinkedService#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#id SynapseLinkedService#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.integrationRuntime">integration_runtime</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | integration_runtime block. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#name SynapseLinkedService#name}.

---

##### `synapse_workspace_id`<sup>Required</sup> <a name="synapse_workspace_id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.synapseWorkspaceId"></a>

```python
synapse_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#synapse_workspace_id SynapseLinkedService#synapse_workspace_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#type SynapseLinkedService#type}.

---

##### `type_properties_json`<sup>Required</sup> <a name="type_properties_json" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.typePropertiesJson"></a>

```python
type_properties_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#type_properties_json SynapseLinkedService#type_properties_json}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#additional_properties SynapseLinkedService#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#annotations SynapseLinkedService#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#description SynapseLinkedService#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#id SynapseLinkedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime`<sup>Optional</sup> <a name="integration_runtime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.integrationRuntime"></a>

```python
integration_runtime: SynapseLinkedServiceIntegrationRuntime
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

integration_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#integration_runtime SynapseLinkedService#integration_runtime}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.timeouts"></a>

```python
timeouts: SynapseLinkedServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#timeouts SynapseLinkedService#timeouts}

---

### SynapseLinkedServiceIntegrationRuntime <a name="SynapseLinkedServiceIntegrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedServiceIntegrationRuntime(
  name: str,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#name SynapseLinkedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#name SynapseLinkedService#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}.

---

### SynapseLinkedServiceTimeouts <a name="SynapseLinkedServiceTimeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedServiceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#create SynapseLinkedService#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#delete SynapseLinkedService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#read SynapseLinkedService#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#update SynapseLinkedService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#create SynapseLinkedService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#delete SynapseLinkedService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#read SynapseLinkedService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/synapse_linked_service#update SynapseLinkedService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseLinkedServiceIntegrationRuntimeOutputReference <a name="SynapseLinkedServiceIntegrationRuntimeOutputReference" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.internalValue"></a>

```python
internal_value: SynapseLinkedServiceIntegrationRuntime
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

---


### SynapseLinkedServiceTimeoutsOutputReference <a name="SynapseLinkedServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import synapse_linked_service

synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SynapseLinkedServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>]

---




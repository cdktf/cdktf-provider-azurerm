# `tenantTemplateDeployment` Submodule <a name="`tenantTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.tenantTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TenantTemplateDeployment <a name="TenantTemplateDeployment" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment azurerm_tenant_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import tenant_template_deployment

tenantTemplateDeployment.TenantTemplateDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  debug_level: str = None,
  id: str = None,
  parameters_content: str = None,
  tags: typing.Mapping[str] = None,
  template_content: str = None,
  template_spec_version_id: str = None,
  timeouts: TenantTemplateDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.debugLevel">debug_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.parametersContent">parameters_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.templateContent">template_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.templateSpecVersionId">template_spec_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}.

---

##### `debug_level`<sup>Optional</sup> <a name="debug_level" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.debugLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters_content`<sup>Optional</sup> <a name="parameters_content" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.parametersContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}.

---

##### `template_content`<sup>Optional</sup> <a name="template_content" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.templateContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}.

---

##### `template_spec_version_id`<sup>Optional</sup> <a name="template_spec_version_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.templateSpecVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#timeouts TenantTemplateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetDebugLevel">reset_debug_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetParametersContent">reset_parameters_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateContent">reset_template_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateSpecVersionId">reset_template_spec_version_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#create TenantTemplateDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#delete TenantTemplateDeployment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#read TenantTemplateDeployment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#update TenantTemplateDeployment#update}.

---

##### `reset_debug_level` <a name="reset_debug_level" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetDebugLevel"></a>

```python
def reset_debug_level() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters_content` <a name="reset_parameters_content" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetParametersContent"></a>

```python
def reset_parameters_content() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_content` <a name="reset_template_content" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateContent"></a>

```python
def reset_template_content() -> None
```

##### `reset_template_spec_version_id` <a name="reset_template_spec_version_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateSpecVersionId"></a>

```python
def reset_template_spec_version_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TenantTemplateDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import tenant_template_deployment

tenantTemplateDeployment.TenantTemplateDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import tenant_template_deployment

tenantTemplateDeployment.TenantTemplateDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import tenant_template_deployment

tenantTemplateDeployment.TenantTemplateDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import tenant_template_deployment

tenantTemplateDeployment.TenantTemplateDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TenantTemplateDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TenantTemplateDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TenantTemplateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TenantTemplateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.outputContent">output_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference">TenantTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevelInput">debug_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContentInput">parameters_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContentInput">template_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionIdInput">template_spec_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevel">debug_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContent">parameters_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContent">template_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionId">template_spec_version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `output_content`<sup>Required</sup> <a name="output_content" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.outputContent"></a>

```python
output_content: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeouts"></a>

```python
timeouts: TenantTemplateDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference">TenantTemplateDeploymentTimeoutsOutputReference</a>

---

##### `debug_level_input`<sup>Optional</sup> <a name="debug_level_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevelInput"></a>

```python
debug_level_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_content_input`<sup>Optional</sup> <a name="parameters_content_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContentInput"></a>

```python
parameters_content_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_content_input`<sup>Optional</sup> <a name="template_content_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContentInput"></a>

```python
template_content_input: str
```

- *Type:* str

---

##### `template_spec_version_id_input`<sup>Optional</sup> <a name="template_spec_version_id_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionIdInput"></a>

```python
template_spec_version_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, TenantTemplateDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>]

---

##### `debug_level`<sup>Required</sup> <a name="debug_level" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevel"></a>

```python
debug_level: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters_content`<sup>Required</sup> <a name="parameters_content" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContent"></a>

```python
parameters_content: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_content`<sup>Required</sup> <a name="template_content" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContent"></a>

```python
template_content: str
```

- *Type:* str

---

##### `template_spec_version_id`<sup>Required</sup> <a name="template_spec_version_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionId"></a>

```python
template_spec_version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TenantTemplateDeploymentConfig <a name="TenantTemplateDeploymentConfig" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import tenant_template_deployment

tenantTemplateDeployment.TenantTemplateDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  debug_level: str = None,
  id: str = None,
  parameters_content: str = None,
  tags: typing.Mapping[str] = None,
  template_content: str = None,
  template_spec_version_id: str = None,
  timeouts: TenantTemplateDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.debugLevel">debug_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.parametersContent">parameters_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateContent">template_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateSpecVersionId">template_spec_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}.

---

##### `debug_level`<sup>Optional</sup> <a name="debug_level" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.debugLevel"></a>

```python
debug_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters_content`<sup>Optional</sup> <a name="parameters_content" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.parametersContent"></a>

```python
parameters_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}.

---

##### `template_content`<sup>Optional</sup> <a name="template_content" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateContent"></a>

```python
template_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}.

---

##### `template_spec_version_id`<sup>Optional</sup> <a name="template_spec_version_id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```python
template_spec_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.timeouts"></a>

```python
timeouts: TenantTemplateDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#timeouts TenantTemplateDeployment#timeouts}

---

### TenantTemplateDeploymentTimeouts <a name="TenantTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import tenant_template_deployment

tenantTemplateDeployment.TenantTemplateDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#create TenantTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#delete TenantTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#read TenantTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#update TenantTemplateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#create TenantTemplateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#delete TenantTemplateDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#read TenantTemplateDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/tenant_template_deployment#update TenantTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TenantTemplateDeploymentTimeoutsOutputReference <a name="TenantTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import tenant_template_deployment

tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TenantTemplateDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>]

---




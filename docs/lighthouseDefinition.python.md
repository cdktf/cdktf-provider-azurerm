# `lighthouseDefinition` Submodule <a name="`lighthouseDefinition` Submodule" id="@cdktf/provider-azurerm.lighthouseDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LighthouseDefinition <a name="LighthouseDefinition" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition azurerm_lighthouse_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: typing.Union[IResolvable, typing.List[LighthouseDefinitionAuthorization]],
  managing_tenant_id: str,
  name: str,
  scope: str,
  description: str = None,
  eligible_authorization: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorization]] = None,
  id: str = None,
  lighthouse_definition_id: str = None,
  plan: LighthouseDefinitionPlan = None,
  timeouts: LighthouseDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.authorization">authorization</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]]</code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.managingTenantId">managing_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#managing_tenant_id LighthouseDefinition#managing_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#scope LighthouseDefinition#scope}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#description LighthouseDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.eligibleAuthorization">eligible_authorization</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]]</code> | eligible_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#id LighthouseDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.lighthouseDefinitionId">lighthouse_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.authorization"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]]

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#authorization LighthouseDefinition#authorization}

---

##### `managing_tenant_id`<sup>Required</sup> <a name="managing_tenant_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.managingTenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#managing_tenant_id LighthouseDefinition#managing_tenant_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#scope LighthouseDefinition#scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#description LighthouseDefinition#description}.

---

##### `eligible_authorization`<sup>Optional</sup> <a name="eligible_authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.eligibleAuthorization"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]]

eligible_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#eligible_authorization LighthouseDefinition#eligible_authorization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#id LighthouseDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lighthouse_definition_id`<sup>Optional</sup> <a name="lighthouse_definition_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.lighthouseDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.plan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#plan LighthouseDefinition#plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#timeouts LighthouseDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putEligibleAuthorization">put_eligible_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan">put_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetEligibleAuthorization">reset_eligible_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetLighthouseDefinitionId">reset_lighthouse_definition_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetPlan">reset_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorization` <a name="put_authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putAuthorization"></a>

```python
def put_authorization(
  value: typing.Union[IResolvable, typing.List[LighthouseDefinitionAuthorization]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putAuthorization.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]]

---

##### `put_eligible_authorization` <a name="put_eligible_authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putEligibleAuthorization"></a>

```python
def put_eligible_authorization(
  value: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorization]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putEligibleAuthorization.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]]

---

##### `put_plan` <a name="put_plan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan"></a>

```python
def put_plan(
  name: str,
  product: str,
  publisher: str,
  version: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}.

---

###### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan.parameter.product"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#product LighthouseDefinition#product}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#publisher LighthouseDefinition#publisher}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putPlan.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#version LighthouseDefinition#version}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#create LighthouseDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#delete LighthouseDefinition#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#read LighthouseDefinition#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#update LighthouseDefinition#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_eligible_authorization` <a name="reset_eligible_authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetEligibleAuthorization"></a>

```python
def reset_eligible_authorization() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lighthouse_definition_id` <a name="reset_lighthouse_definition_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetLighthouseDefinitionId"></a>

```python
def reset_lighthouse_definition_id() -> None
```

##### `reset_plan` <a name="reset_plan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetPlan"></a>

```python
def reset_plan() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LighthouseDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LighthouseDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LighthouseDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LighthouseDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LighthouseDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList">LighthouseDefinitionAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorization">eligible_authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList">LighthouseDefinitionEligibleAuthorizationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference">LighthouseDefinitionPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference">LighthouseDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorizationInput">authorization_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorizationInput">eligible_authorization_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionIdInput">lighthouse_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantIdInput">managing_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.planInput">plan_input</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionId">lighthouse_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantId">managing_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorization"></a>

```python
authorization: LighthouseDefinitionAuthorizationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList">LighthouseDefinitionAuthorizationList</a>

---

##### `eligible_authorization`<sup>Required</sup> <a name="eligible_authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorization"></a>

```python
eligible_authorization: LighthouseDefinitionEligibleAuthorizationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList">LighthouseDefinitionEligibleAuthorizationList</a>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.plan"></a>

```python
plan: LighthouseDefinitionPlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference">LighthouseDefinitionPlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeouts"></a>

```python
timeouts: LighthouseDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference">LighthouseDefinitionTimeoutsOutputReference</a>

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.authorizationInput"></a>

```python
authorization_input: typing.Union[IResolvable, typing.List[LighthouseDefinitionAuthorization]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `eligible_authorization_input`<sup>Optional</sup> <a name="eligible_authorization_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.eligibleAuthorizationInput"></a>

```python
eligible_authorization_input: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorization]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lighthouse_definition_id_input`<sup>Optional</sup> <a name="lighthouse_definition_id_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionIdInput"></a>

```python
lighthouse_definition_id_input: str
```

- *Type:* str

---

##### `managing_tenant_id_input`<sup>Optional</sup> <a name="managing_tenant_id_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantIdInput"></a>

```python
managing_tenant_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plan_input`<sup>Optional</sup> <a name="plan_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.planInput"></a>

```python
plan_input: LighthouseDefinitionPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LighthouseDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lighthouse_definition_id`<sup>Required</sup> <a name="lighthouse_definition_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.lighthouseDefinitionId"></a>

```python
lighthouse_definition_id: str
```

- *Type:* str

---

##### `managing_tenant_id`<sup>Required</sup> <a name="managing_tenant_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.managingTenantId"></a>

```python
managing_tenant_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LighthouseDefinitionAuthorization <a name="LighthouseDefinitionAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionAuthorization(
  principal_id: str,
  role_definition_id: str,
  delegated_role_definition_ids: typing.List[str] = None,
  principal_display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.delegatedRoleDefinitionIds">delegated_role_definition_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#delegated_role_definition_ids LighthouseDefinition#delegated_role_definition_ids}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalDisplayName">principal_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}. |

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}.

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}.

---

##### `delegated_role_definition_ids`<sup>Optional</sup> <a name="delegated_role_definition_ids" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.delegatedRoleDefinitionIds"></a>

```python
delegated_role_definition_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#delegated_role_definition_ids LighthouseDefinition#delegated_role_definition_ids}.

---

##### `principal_display_name`<sup>Optional</sup> <a name="principal_display_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization.property.principalDisplayName"></a>

```python
principal_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}.

---

### LighthouseDefinitionConfig <a name="LighthouseDefinitionConfig" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: typing.Union[IResolvable, typing.List[LighthouseDefinitionAuthorization]],
  managing_tenant_id: str,
  name: str,
  scope: str,
  description: str = None,
  eligible_authorization: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorization]] = None,
  id: str = None,
  lighthouse_definition_id: str = None,
  plan: LighthouseDefinitionPlan = None,
  timeouts: LighthouseDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.authorization">authorization</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]]</code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.managingTenantId">managing_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#managing_tenant_id LighthouseDefinition#managing_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#scope LighthouseDefinition#scope}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#description LighthouseDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.eligibleAuthorization">eligible_authorization</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]]</code> | eligible_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#id LighthouseDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lighthouseDefinitionId">lighthouse_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.plan">plan</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | plan block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.authorization"></a>

```python
authorization: typing.Union[IResolvable, typing.List[LighthouseDefinitionAuthorization]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]]

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#authorization LighthouseDefinition#authorization}

---

##### `managing_tenant_id`<sup>Required</sup> <a name="managing_tenant_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.managingTenantId"></a>

```python
managing_tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#managing_tenant_id LighthouseDefinition#managing_tenant_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#scope LighthouseDefinition#scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#description LighthouseDefinition#description}.

---

##### `eligible_authorization`<sup>Optional</sup> <a name="eligible_authorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.eligibleAuthorization"></a>

```python
eligible_authorization: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorization]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]]

eligible_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#eligible_authorization LighthouseDefinition#eligible_authorization}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#id LighthouseDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lighthouse_definition_id`<sup>Optional</sup> <a name="lighthouse_definition_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.lighthouseDefinitionId"></a>

```python
lighthouse_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}.

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.plan"></a>

```python
plan: LighthouseDefinitionPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#plan LighthouseDefinition#plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionConfig.property.timeouts"></a>

```python
timeouts: LighthouseDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#timeouts LighthouseDefinition#timeouts}

---

### LighthouseDefinitionEligibleAuthorization <a name="LighthouseDefinitionEligibleAuthorization" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionEligibleAuthorization(
  principal_id: str,
  role_definition_id: str,
  just_in_time_access_policy: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy = None,
  principal_display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.justInTimeAccessPolicy">just_in_time_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a></code> | just_in_time_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalDisplayName">principal_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}. |

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}.

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#role_definition_id LighthouseDefinition#role_definition_id}.

---

##### `just_in_time_access_policy`<sup>Optional</sup> <a name="just_in_time_access_policy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.justInTimeAccessPolicy"></a>

```python
just_in_time_access_policy: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

just_in_time_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#just_in_time_access_policy LighthouseDefinition#just_in_time_access_policy}

---

##### `principal_display_name`<sup>Optional</sup> <a name="principal_display_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization.property.principalDisplayName"></a>

```python
principal_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}.

---

### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy(
  approver: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover]] = None,
  maximum_activation_duration: str = None,
  multi_factor_auth_provider: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.approver">approver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]]</code> | approver block. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.maximumActivationDuration">maximum_activation_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#maximum_activation_duration LighthouseDefinition#maximum_activation_duration}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.multiFactorAuthProvider">multi_factor_auth_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#multi_factor_auth_provider LighthouseDefinition#multi_factor_auth_provider}. |

---

##### `approver`<sup>Optional</sup> <a name="approver" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.approver"></a>

```python
approver: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]]

approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#approver LighthouseDefinition#approver}

---

##### `maximum_activation_duration`<sup>Optional</sup> <a name="maximum_activation_duration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.maximumActivationDuration"></a>

```python
maximum_activation_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#maximum_activation_duration LighthouseDefinition#maximum_activation_duration}.

---

##### `multi_factor_auth_provider`<sup>Optional</sup> <a name="multi_factor_auth_provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy.property.multiFactorAuthProvider"></a>

```python
multi_factor_auth_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#multi_factor_auth_provider LighthouseDefinition#multi_factor_auth_provider}.

---

### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover(
  principal_id: str,
  principal_display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalDisplayName">principal_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}. |

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_id LighthouseDefinition#principal_id}.

---

##### `principal_display_name`<sup>Optional</sup> <a name="principal_display_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover.property.principalDisplayName"></a>

```python
principal_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#principal_display_name LighthouseDefinition#principal_display_name}.

---

### LighthouseDefinitionPlan <a name="LighthouseDefinitionPlan" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionPlan(
  name: str,
  product: str,
  publisher: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#product LighthouseDefinition#product}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#publisher LighthouseDefinition#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#version LighthouseDefinition#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#name LighthouseDefinition#name}.

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#product LighthouseDefinition#product}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#publisher LighthouseDefinition#publisher}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#version LighthouseDefinition#version}.

---

### LighthouseDefinitionTimeouts <a name="LighthouseDefinitionTimeouts" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#create LighthouseDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#delete LighthouseDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#read LighthouseDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#update LighthouseDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#create LighthouseDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#delete LighthouseDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#read LighthouseDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#update LighthouseDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LighthouseDefinitionAuthorizationList <a name="LighthouseDefinitionAuthorizationList" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionAuthorizationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LighthouseDefinitionAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LighthouseDefinitionAuthorization]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]]

---


### LighthouseDefinitionAuthorizationOutputReference <a name="LighthouseDefinitionAuthorizationOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetDelegatedRoleDefinitionIds">reset_delegated_role_definition_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetPrincipalDisplayName">reset_principal_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delegated_role_definition_ids` <a name="reset_delegated_role_definition_ids" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetDelegatedRoleDefinitionIds"></a>

```python
def reset_delegated_role_definition_ids() -> None
```

##### `reset_principal_display_name` <a name="reset_principal_display_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.resetPrincipalDisplayName"></a>

```python
def reset_principal_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIdsInput">delegated_role_definition_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayNameInput">principal_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput">role_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIds">delegated_role_definition_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayName">principal_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delegated_role_definition_ids_input`<sup>Optional</sup> <a name="delegated_role_definition_ids_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIdsInput"></a>

```python
delegated_role_definition_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_display_name_input`<sup>Optional</sup> <a name="principal_display_name_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayNameInput"></a>

```python
principal_display_name_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `role_definition_id_input`<sup>Optional</sup> <a name="role_definition_id_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionIdInput"></a>

```python
role_definition_id_input: str
```

- *Type:* str

---

##### `delegated_role_definition_ids`<sup>Required</sup> <a name="delegated_role_definition_ids" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.delegatedRoleDefinitionIds"></a>

```python
delegated_role_definition_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_display_name`<sup>Required</sup> <a name="principal_display_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalDisplayName"></a>

```python
principal_display_name: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LighthouseDefinitionAuthorization]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionAuthorization">LighthouseDefinitionAuthorization</a>]

---


### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]]

---


### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resetPrincipalDisplayName">reset_principal_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principal_display_name` <a name="reset_principal_display_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.resetPrincipalDisplayName"></a>

```python
def reset_principal_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayNameInput">principal_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayName">principal_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_display_name_input`<sup>Optional</sup> <a name="principal_display_name_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayNameInput"></a>

```python
principal_display_name_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `principal_display_name`<sup>Required</sup> <a name="principal_display_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalDisplayName"></a>

```python
principal_display_name: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]

---


### LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference <a name="LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.putApprover">put_approver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetApprover">reset_approver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMaximumActivationDuration">reset_maximum_activation_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMultiFactorAuthProvider">reset_multi_factor_auth_provider</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_approver` <a name="put_approver" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.putApprover"></a>

```python
def put_approver(
  value: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.putApprover.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]]

---

##### `reset_approver` <a name="reset_approver" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetApprover"></a>

```python
def reset_approver() -> None
```

##### `reset_maximum_activation_duration` <a name="reset_maximum_activation_duration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMaximumActivationDuration"></a>

```python
def reset_maximum_activation_duration() -> None
```

##### `reset_multi_factor_auth_provider` <a name="reset_multi_factor_auth_provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.resetMultiFactorAuthProvider"></a>

```python
def reset_multi_factor_auth_provider() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approver">approver</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approverInput">approver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDurationInput">maximum_activation_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProviderInput">multi_factor_auth_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDuration">maximum_activation_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProvider">multi_factor_auth_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approver`<sup>Required</sup> <a name="approver" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approver"></a>

```python
approver: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApproverList</a>

---

##### `approver_input`<sup>Optional</sup> <a name="approver_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.approverInput"></a>

```python
approver_input: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]]

---

##### `maximum_activation_duration_input`<sup>Optional</sup> <a name="maximum_activation_duration_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDurationInput"></a>

```python
maximum_activation_duration_input: str
```

- *Type:* str

---

##### `multi_factor_auth_provider_input`<sup>Optional</sup> <a name="multi_factor_auth_provider_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProviderInput"></a>

```python
multi_factor_auth_provider_input: str
```

- *Type:* str

---

##### `maximum_activation_duration`<sup>Required</sup> <a name="maximum_activation_duration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.maximumActivationDuration"></a>

```python
maximum_activation_duration: str
```

- *Type:* str

---

##### `multi_factor_auth_provider`<sup>Required</sup> <a name="multi_factor_auth_provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.multiFactorAuthProvider"></a>

```python
multi_factor_auth_provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

---


### LighthouseDefinitionEligibleAuthorizationList <a name="LighthouseDefinitionEligibleAuthorizationList" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LighthouseDefinitionEligibleAuthorizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorization]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]]

---


### LighthouseDefinitionEligibleAuthorizationOutputReference <a name="LighthouseDefinitionEligibleAuthorizationOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy">put_just_in_time_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetJustInTimeAccessPolicy">reset_just_in_time_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetPrincipalDisplayName">reset_principal_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_just_in_time_access_policy` <a name="put_just_in_time_access_policy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy"></a>

```python
def put_just_in_time_access_policy(
  approver: typing.Union[IResolvable, typing.List[LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover]] = None,
  maximum_activation_duration: str = None,
  multi_factor_auth_provider: str = None
) -> None
```

###### `approver`<sup>Optional</sup> <a name="approver" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy.parameter.approver"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyApprover</a>]]

approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#approver LighthouseDefinition#approver}

---

###### `maximum_activation_duration`<sup>Optional</sup> <a name="maximum_activation_duration" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy.parameter.maximumActivationDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#maximum_activation_duration LighthouseDefinition#maximum_activation_duration}.

---

###### `multi_factor_auth_provider`<sup>Optional</sup> <a name="multi_factor_auth_provider" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.putJustInTimeAccessPolicy.parameter.multiFactorAuthProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/lighthouse_definition#multi_factor_auth_provider LighthouseDefinition#multi_factor_auth_provider}.

---

##### `reset_just_in_time_access_policy` <a name="reset_just_in_time_access_policy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetJustInTimeAccessPolicy"></a>

```python
def reset_just_in_time_access_policy() -> None
```

##### `reset_principal_display_name` <a name="reset_principal_display_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.resetPrincipalDisplayName"></a>

```python
def reset_principal_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicy">just_in_time_access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicyInput">just_in_time_access_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayNameInput">principal_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionIdInput">role_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayName">principal_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `just_in_time_access_policy`<sup>Required</sup> <a name="just_in_time_access_policy" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicy"></a>

```python
just_in_time_access_policy: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicyOutputReference</a>

---

##### `just_in_time_access_policy_input`<sup>Optional</sup> <a name="just_in_time_access_policy_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.justInTimeAccessPolicyInput"></a>

```python
just_in_time_access_policy_input: LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy">LighthouseDefinitionEligibleAuthorizationJustInTimeAccessPolicy</a>

---

##### `principal_display_name_input`<sup>Optional</sup> <a name="principal_display_name_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayNameInput"></a>

```python
principal_display_name_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `role_definition_id_input`<sup>Optional</sup> <a name="role_definition_id_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionIdInput"></a>

```python
role_definition_id_input: str
```

- *Type:* str

---

##### `principal_display_name`<sup>Required</sup> <a name="principal_display_name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalDisplayName"></a>

```python
principal_display_name: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LighthouseDefinitionEligibleAuthorization]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionEligibleAuthorization">LighthouseDefinitionEligibleAuthorization</a>]

---


### LighthouseDefinitionPlanOutputReference <a name="LighthouseDefinitionPlanOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionPlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlanOutputReference.property.internalValue"></a>

```python
internal_value: LighthouseDefinitionPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionPlan">LighthouseDefinitionPlan</a>

---


### LighthouseDefinitionTimeoutsOutputReference <a name="LighthouseDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lighthouse_definition

lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LighthouseDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lighthouseDefinition.LighthouseDefinitionTimeouts">LighthouseDefinitionTimeouts</a>]

---




# `pimActiveRoleAssignment` Submodule <a name="`pimActiveRoleAssignment` Submodule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PimActiveRoleAssignment <a name="PimActiveRoleAssignment" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment azurerm_pim_active_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  principal_id: str,
  role_definition_id: str,
  scope: str,
  id: str = None,
  justification: str = None,
  schedule: PimActiveRoleAssignmentSchedule = None,
  ticket: PimActiveRoleAssignmentTicket = None,
  timeouts: PimActiveRoleAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.principalId">principal_id</a></code> | <code>str</code> | Object ID of the principal for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Role definition ID for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Scope for this role assignment, should be a valid resource ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.justification">justification</a></code> | <code>str</code> | The justification for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | ticket block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.principalId"></a>

- *Type:* str

Object ID of the principal for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#principal_id PimActiveRoleAssignment#principal_id}

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.roleDefinitionId"></a>

- *Type:* str

Role definition ID for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#role_definition_id PimActiveRoleAssignment#role_definition_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* str

Scope for this role assignment, should be a valid resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#scope PimActiveRoleAssignment#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.justification"></a>

- *Type:* str

The justification for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#justification PimActiveRoleAssignment#justification}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#schedule PimActiveRoleAssignment#schedule}

---

##### `ticket`<sup>Optional</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.ticket"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

ticket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#ticket PimActiveRoleAssignment#ticket}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#timeouts PimActiveRoleAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket">put_ticket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetJustification">reset_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTicket">reset_ticket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule"></a>

```python
def put_schedule(
  expiration: PimActiveRoleAssignmentScheduleExpiration = None,
  start_date_time: str = None
) -> None
```

###### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule.parameter.expiration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#expiration PimActiveRoleAssignment#expiration}

---

###### `start_date_time`<sup>Optional</sup> <a name="start_date_time" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putSchedule.parameter.startDateTime"></a>

- *Type:* str

The start date/time of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#start_date_time PimActiveRoleAssignment#start_date_time}

---

##### `put_ticket` <a name="put_ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket"></a>

```python
def put_ticket(
  number: str = None,
  system_attribute: str = None
) -> None
```

###### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket.parameter.number"></a>

- *Type:* str

User-supplied ticket number to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#number PimActiveRoleAssignment#number}

---

###### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTicket.parameter.systemAttribute"></a>

- *Type:* str

User-supplied ticket system name to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#system PimActiveRoleAssignment#system}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_justification` <a name="reset_justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetJustification"></a>

```python
def reset_justification() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_ticket` <a name="reset_ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTicket"></a>

```python
def reset_ticket() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PimActiveRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PimActiveRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PimActiveRoleAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PimActiveRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PimActiveRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference">PimActiveRoleAssignmentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference">PimActiveRoleAssignmentTicketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference">PimActiveRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justificationInput">justification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionIdInput">role_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticketInput">ticket_input</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justification">justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.schedule"></a>

```python
schedule: PimActiveRoleAssignmentScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference">PimActiveRoleAssignmentScheduleOutputReference</a>

---

##### `ticket`<sup>Required</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticket"></a>

```python
ticket: PimActiveRoleAssignmentTicketOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference">PimActiveRoleAssignmentTicketOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeouts"></a>

```python
timeouts: PimActiveRoleAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference">PimActiveRoleAssignmentTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `justification_input`<sup>Optional</sup> <a name="justification_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justificationInput"></a>

```python
justification_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `role_definition_id_input`<sup>Optional</sup> <a name="role_definition_id_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionIdInput"></a>

```python
role_definition_id_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scheduleInput"></a>

```python
schedule_input: PimActiveRoleAssignmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `ticket_input`<sup>Optional</sup> <a name="ticket_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.ticketInput"></a>

```python
ticket_input: PimActiveRoleAssignmentTicket
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PimActiveRoleAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.justification"></a>

```python
justification: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PimActiveRoleAssignmentConfig <a name="PimActiveRoleAssignmentConfig" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  principal_id: str,
  role_definition_id: str,
  scope: str,
  id: str = None,
  justification: str = None,
  schedule: PimActiveRoleAssignmentSchedule = None,
  ticket: PimActiveRoleAssignmentTicket = None,
  timeouts: PimActiveRoleAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.principalId">principal_id</a></code> | <code>str</code> | Object ID of the principal for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Role definition ID for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.scope">scope</a></code> | <code>str</code> | Scope for this role assignment, should be a valid resource ID. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.justification">justification</a></code> | <code>str</code> | The justification for this role assignment. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.ticket">ticket</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | ticket block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Object ID of the principal for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#principal_id PimActiveRoleAssignment#principal_id}

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

Role definition ID for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#role_definition_id PimActiveRoleAssignment#role_definition_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Scope for this role assignment, should be a valid resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#scope PimActiveRoleAssignment#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#id PimActiveRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.justification"></a>

```python
justification: str
```

- *Type:* str

The justification for this role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#justification PimActiveRoleAssignment#justification}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.schedule"></a>

```python
schedule: PimActiveRoleAssignmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#schedule PimActiveRoleAssignment#schedule}

---

##### `ticket`<sup>Optional</sup> <a name="ticket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.ticket"></a>

```python
ticket: PimActiveRoleAssignmentTicket
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

ticket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#ticket PimActiveRoleAssignment#ticket}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentConfig.property.timeouts"></a>

```python
timeouts: PimActiveRoleAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#timeouts PimActiveRoleAssignment#timeouts}

---

### PimActiveRoleAssignmentSchedule <a name="PimActiveRoleAssignmentSchedule" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule(
  expiration: PimActiveRoleAssignmentScheduleExpiration = None,
  start_date_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.startDateTime">start_date_time</a></code> | <code>str</code> | The start date/time of the role assignment. |

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.expiration"></a>

```python
expiration: PimActiveRoleAssignmentScheduleExpiration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#expiration PimActiveRoleAssignment#expiration}

---

##### `start_date_time`<sup>Optional</sup> <a name="start_date_time" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule.property.startDateTime"></a>

```python
start_date_time: str
```

- *Type:* str

The start date/time of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#start_date_time PimActiveRoleAssignment#start_date_time}

---

### PimActiveRoleAssignmentScheduleExpiration <a name="PimActiveRoleAssignmentScheduleExpiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration(
  duration_days: typing.Union[int, float] = None,
  duration_hours: typing.Union[int, float] = None,
  end_date_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationDays">duration_days</a></code> | <code>typing.Union[int, float]</code> | The duration of the role assignment in days. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationHours">duration_hours</a></code> | <code>typing.Union[int, float]</code> | The duration of the role assignment in hours. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.endDateTime">end_date_time</a></code> | <code>str</code> | The end date/time of the role assignment. |

---

##### `duration_days`<sup>Optional</sup> <a name="duration_days" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationDays"></a>

```python
duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration of the role assignment in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#duration_days PimActiveRoleAssignment#duration_days}

---

##### `duration_hours`<sup>Optional</sup> <a name="duration_hours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.durationHours"></a>

```python
duration_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration of the role assignment in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#duration_hours PimActiveRoleAssignment#duration_hours}

---

##### `end_date_time`<sup>Optional</sup> <a name="end_date_time" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration.property.endDateTime"></a>

```python
end_date_time: str
```

- *Type:* str

The end date/time of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#end_date_time PimActiveRoleAssignment#end_date_time}

---

### PimActiveRoleAssignmentTicket <a name="PimActiveRoleAssignmentTicket" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignmentTicket(
  number: str = None,
  system_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.number">number</a></code> | <code>str</code> | User-supplied ticket number to be included with the request. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.systemAttribute">system_attribute</a></code> | <code>str</code> | User-supplied ticket system name to be included with the request. |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.number"></a>

```python
number: str
```

- *Type:* str

User-supplied ticket number to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#number PimActiveRoleAssignment#number}

---

##### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

User-supplied ticket system name to be included with the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#system PimActiveRoleAssignment#system}

---

### PimActiveRoleAssignmentTimeouts <a name="PimActiveRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#create PimActiveRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#delete PimActiveRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#read PimActiveRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PimActiveRoleAssignmentScheduleExpirationOutputReference <a name="PimActiveRoleAssignmentScheduleExpirationOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationDays">reset_duration_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationHours">reset_duration_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime">reset_end_date_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_days` <a name="reset_duration_days" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationDays"></a>

```python
def reset_duration_days() -> None
```

##### `reset_duration_hours` <a name="reset_duration_hours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetDurationHours"></a>

```python
def reset_duration_hours() -> None
```

##### `reset_end_date_time` <a name="reset_end_date_time" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.resetEndDateTime"></a>

```python
def reset_end_date_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput">duration_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput">duration_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput">end_date_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDays">duration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHours">duration_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTime">end_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_days_input`<sup>Optional</sup> <a name="duration_days_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDaysInput"></a>

```python
duration_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_hours_input`<sup>Optional</sup> <a name="duration_hours_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHoursInput"></a>

```python
duration_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_date_time_input`<sup>Optional</sup> <a name="end_date_time_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTimeInput"></a>

```python
end_date_time_input: str
```

- *Type:* str

---

##### `duration_days`<sup>Required</sup> <a name="duration_days" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationDays"></a>

```python
duration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_hours`<sup>Required</sup> <a name="duration_hours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.durationHours"></a>

```python
duration_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_date_time`<sup>Required</sup> <a name="end_date_time" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.endDateTime"></a>

```python
end_date_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference.property.internalValue"></a>

```python
internal_value: PimActiveRoleAssignmentScheduleExpiration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---


### PimActiveRoleAssignmentScheduleOutputReference <a name="PimActiveRoleAssignmentScheduleOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration">put_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetStartDateTime">reset_start_date_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expiration` <a name="put_expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration"></a>

```python
def put_expiration(
  duration_days: typing.Union[int, float] = None,
  duration_hours: typing.Union[int, float] = None,
  end_date_time: str = None
) -> None
```

###### `duration_days`<sup>Optional</sup> <a name="duration_days" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration.parameter.durationDays"></a>

- *Type:* typing.Union[int, float]

The duration of the role assignment in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#duration_days PimActiveRoleAssignment#duration_days}

---

###### `duration_hours`<sup>Optional</sup> <a name="duration_hours" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration.parameter.durationHours"></a>

- *Type:* typing.Union[int, float]

The duration of the role assignment in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#duration_hours PimActiveRoleAssignment#duration_hours}

---

###### `end_date_time`<sup>Optional</sup> <a name="end_date_time" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.putExpiration.parameter.endDateTime"></a>

- *Type:* str

The end date/time of the role assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/pim_active_role_assignment#end_date_time PimActiveRoleAssignment#end_date_time}

---

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_start_date_time` <a name="reset_start_date_time" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.resetStartDateTime"></a>

```python
def reset_start_date_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference">PimActiveRoleAssignmentScheduleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expirationInput">expiration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTimeInput">start_date_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTime">start_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expiration"></a>

```python
expiration: PimActiveRoleAssignmentScheduleExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpirationOutputReference">PimActiveRoleAssignmentScheduleExpirationOutputReference</a>

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.expirationInput"></a>

```python
expiration_input: PimActiveRoleAssignmentScheduleExpiration
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleExpiration">PimActiveRoleAssignmentScheduleExpiration</a>

---

##### `start_date_time_input`<sup>Optional</sup> <a name="start_date_time_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTimeInput"></a>

```python
start_date_time_input: str
```

- *Type:* str

---

##### `start_date_time`<sup>Required</sup> <a name="start_date_time" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.startDateTime"></a>

```python
start_date_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentScheduleOutputReference.property.internalValue"></a>

```python
internal_value: PimActiveRoleAssignmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentSchedule">PimActiveRoleAssignmentSchedule</a>

---


### PimActiveRoleAssignmentTicketOutputReference <a name="PimActiveRoleAssignmentTicketOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetNumber">reset_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetSystemAttribute">reset_system_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number` <a name="reset_number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetNumber"></a>

```python
def reset_number() -> None
```

##### `reset_system_attribute` <a name="reset_system_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.resetSystemAttribute"></a>

```python
def reset_system_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.numberInput">number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttributeInput">system_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.number">number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttribute">system_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.numberInput"></a>

```python
number_input: str
```

- *Type:* str

---

##### `system_attribute_input`<sup>Optional</sup> <a name="system_attribute_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttributeInput"></a>

```python
system_attribute_input: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.number"></a>

```python
number: str
```

- *Type:* str

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicketOutputReference.property.internalValue"></a>

```python
internal_value: PimActiveRoleAssignmentTicket
```

- *Type:* <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTicket">PimActiveRoleAssignmentTicket</a>

---


### PimActiveRoleAssignmentTimeoutsOutputReference <a name="PimActiveRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import pim_active_role_assignment

pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PimActiveRoleAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.pimActiveRoleAssignment.PimActiveRoleAssignmentTimeouts">PimActiveRoleAssignmentTimeouts</a>]

---




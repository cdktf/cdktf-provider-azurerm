# `roleManagementPolicy` Submodule <a name="`roleManagementPolicy` Submodule" id="@cdktf/provider-azurerm.roleManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RoleManagementPolicy <a name="RoleManagementPolicy" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy azurerm_role_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_definition_id: str,
  scope: str,
  activation_rules: RoleManagementPolicyActivationRules = None,
  active_assignment_rules: RoleManagementPolicyActiveAssignmentRules = None,
  eligible_assignment_rules: RoleManagementPolicyEligibleAssignmentRules = None,
  id: str = None,
  notification_rules: RoleManagementPolicyNotificationRules = None,
  timeouts: RoleManagementPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | ID of the Azure Role to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>str</code> | The scope of the role to which this policy will apply. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.activationRules">activation_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a></code> | activation_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.activeAssignmentRules">active_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a></code> | active_assignment_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.eligibleAssignmentRules">eligible_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a></code> | eligible_assignment_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#id RoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.notificationRules">notification_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a></code> | notification_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.roleDefinitionId"></a>

- *Type:* str

ID of the Azure Role to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#role_definition_id RoleManagementPolicy#role_definition_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* str

The scope of the role to which this policy will apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#scope RoleManagementPolicy#scope}

---

##### `activation_rules`<sup>Optional</sup> <a name="activation_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.activationRules"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a>

activation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#activation_rules RoleManagementPolicy#activation_rules}

---

##### `active_assignment_rules`<sup>Optional</sup> <a name="active_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.activeAssignmentRules"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a>

active_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#active_assignment_rules RoleManagementPolicy#active_assignment_rules}

---

##### `eligible_assignment_rules`<sup>Optional</sup> <a name="eligible_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.eligibleAssignmentRules"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a>

eligible_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#eligible_assignment_rules RoleManagementPolicy#eligible_assignment_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#id RoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_rules`<sup>Optional</sup> <a name="notification_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.notificationRules"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a>

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_rules RoleManagementPolicy#notification_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#timeouts RoleManagementPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules">put_activation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules">put_active_assignment_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putEligibleAssignmentRules">put_eligible_assignment_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putNotificationRules">put_notification_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetActivationRules">reset_activation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetActiveAssignmentRules">reset_active_assignment_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetEligibleAssignmentRules">reset_eligible_assignment_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetNotificationRules">reset_notification_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_activation_rules` <a name="put_activation_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules"></a>

```python
def put_activation_rules(
  approval_stage: RoleManagementPolicyActivationRulesApprovalStage = None,
  maximum_duration: str = None,
  require_approval: typing.Union[bool, IResolvable] = None,
  required_conditional_access_authentication_context: str = None,
  require_justification: typing.Union[bool, IResolvable] = None,
  require_multifactor_authentication: typing.Union[bool, IResolvable] = None,
  require_ticket_info: typing.Union[bool, IResolvable] = None
) -> None
```

###### `approval_stage`<sup>Optional</sup> <a name="approval_stage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules.parameter.approvalStage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a>

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#approval_stage RoleManagementPolicy#approval_stage}

---

###### `maximum_duration`<sup>Optional</sup> <a name="maximum_duration" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules.parameter.maximumDuration"></a>

- *Type:* str

The time after which the an activation can be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#maximum_duration RoleManagementPolicy#maximum_duration}

---

###### `require_approval`<sup>Optional</sup> <a name="require_approval" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules.parameter.requireApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an approval is required for activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_approval RoleManagementPolicy#require_approval}

---

###### `required_conditional_access_authentication_context`<sup>Optional</sup> <a name="required_conditional_access_authentication_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules.parameter.requiredConditionalAccessAuthenticationContext"></a>

- *Type:* str

Whether a conditional access context is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#required_conditional_access_authentication_context RoleManagementPolicy#required_conditional_access_authentication_context}

---

###### `require_justification`<sup>Optional</sup> <a name="require_justification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules.parameter.requireJustification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a justification is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_justification RoleManagementPolicy#require_justification}

---

###### `require_multifactor_authentication`<sup>Optional</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules.parameter.requireMultifactorAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multi-factor authentication is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_multifactor_authentication RoleManagementPolicy#require_multifactor_authentication}

---

###### `require_ticket_info`<sup>Optional</sup> <a name="require_ticket_info" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActivationRules.parameter.requireTicketInfo"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether ticket information is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_ticket_info RoleManagementPolicy#require_ticket_info}

---

##### `put_active_assignment_rules` <a name="put_active_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules"></a>

```python
def put_active_assignment_rules(
  expiration_required: typing.Union[bool, IResolvable] = None,
  expire_after: str = None,
  require_justification: typing.Union[bool, IResolvable] = None,
  require_multifactor_authentication: typing.Union[bool, IResolvable] = None,
  require_ticket_info: typing.Union[bool, IResolvable] = None
) -> None
```

###### `expiration_required`<sup>Optional</sup> <a name="expiration_required" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules.parameter.expirationRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#expiration_required RoleManagementPolicy#expiration_required}

---

###### `expire_after`<sup>Optional</sup> <a name="expire_after" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules.parameter.expireAfter"></a>

- *Type:* str

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#expire_after RoleManagementPolicy#expire_after}

---

###### `require_justification`<sup>Optional</sup> <a name="require_justification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules.parameter.requireJustification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a justification is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_justification RoleManagementPolicy#require_justification}

---

###### `require_multifactor_authentication`<sup>Optional</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules.parameter.requireMultifactorAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multi-factor authentication is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_multifactor_authentication RoleManagementPolicy#require_multifactor_authentication}

---

###### `require_ticket_info`<sup>Optional</sup> <a name="require_ticket_info" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putActiveAssignmentRules.parameter.requireTicketInfo"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether ticket information is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_ticket_info RoleManagementPolicy#require_ticket_info}

---

##### `put_eligible_assignment_rules` <a name="put_eligible_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putEligibleAssignmentRules"></a>

```python
def put_eligible_assignment_rules(
  expiration_required: typing.Union[bool, IResolvable] = None,
  expire_after: str = None
) -> None
```

###### `expiration_required`<sup>Optional</sup> <a name="expiration_required" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putEligibleAssignmentRules.parameter.expirationRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#expiration_required RoleManagementPolicy#expiration_required}

---

###### `expire_after`<sup>Optional</sup> <a name="expire_after" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putEligibleAssignmentRules.parameter.expireAfter"></a>

- *Type:* str

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#expire_after RoleManagementPolicy#expire_after}

---

##### `put_notification_rules` <a name="put_notification_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putNotificationRules"></a>

```python
def put_notification_rules(
  active_assignments: RoleManagementPolicyNotificationRulesActiveAssignments = None,
  eligible_activations: RoleManagementPolicyNotificationRulesEligibleActivations = None,
  eligible_assignments: RoleManagementPolicyNotificationRulesEligibleAssignments = None
) -> None
```

###### `active_assignments`<sup>Optional</sup> <a name="active_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putNotificationRules.parameter.activeAssignments"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a>

active_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#active_assignments RoleManagementPolicy#active_assignments}

---

###### `eligible_activations`<sup>Optional</sup> <a name="eligible_activations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putNotificationRules.parameter.eligibleActivations"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a>

eligible_activations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#eligible_activations RoleManagementPolicy#eligible_activations}

---

###### `eligible_assignments`<sup>Optional</sup> <a name="eligible_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putNotificationRules.parameter.eligibleAssignments"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a>

eligible_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#eligible_assignments RoleManagementPolicy#eligible_assignments}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#create RoleManagementPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#delete RoleManagementPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#read RoleManagementPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#update RoleManagementPolicy#update}.

---

##### `reset_activation_rules` <a name="reset_activation_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetActivationRules"></a>

```python
def reset_activation_rules() -> None
```

##### `reset_active_assignment_rules` <a name="reset_active_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetActiveAssignmentRules"></a>

```python
def reset_active_assignment_rules() -> None
```

##### `reset_eligible_assignment_rules` <a name="reset_eligible_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetEligibleAssignmentRules"></a>

```python
def reset_eligible_assignment_rules() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_rules` <a name="reset_notification_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetNotificationRules"></a>

```python
def reset_notification_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RoleManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RoleManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RoleManagementPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RoleManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RoleManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activationRules">activation_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference">RoleManagementPolicyActivationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activeAssignmentRules">active_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference">RoleManagementPolicyActiveAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.eligibleAssignmentRules">eligible_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference">RoleManagementPolicyEligibleAssignmentRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.notificationRules">notification_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference">RoleManagementPolicyNotificationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference">RoleManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activationRulesInput">activation_rules_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activeAssignmentRulesInput">active_assignment_rules_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.eligibleAssignmentRulesInput">eligible_assignment_rules_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.notificationRulesInput">notification_rules_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.roleDefinitionIdInput">role_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activation_rules`<sup>Required</sup> <a name="activation_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activationRules"></a>

```python
activation_rules: RoleManagementPolicyActivationRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference">RoleManagementPolicyActivationRulesOutputReference</a>

---

##### `active_assignment_rules`<sup>Required</sup> <a name="active_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activeAssignmentRules"></a>

```python
active_assignment_rules: RoleManagementPolicyActiveAssignmentRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference">RoleManagementPolicyActiveAssignmentRulesOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `eligible_assignment_rules`<sup>Required</sup> <a name="eligible_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.eligibleAssignmentRules"></a>

```python
eligible_assignment_rules: RoleManagementPolicyEligibleAssignmentRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference">RoleManagementPolicyEligibleAssignmentRulesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_rules`<sup>Required</sup> <a name="notification_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.notificationRules"></a>

```python
notification_rules: RoleManagementPolicyNotificationRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference">RoleManagementPolicyNotificationRulesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.timeouts"></a>

```python
timeouts: RoleManagementPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference">RoleManagementPolicyTimeoutsOutputReference</a>

---

##### `activation_rules_input`<sup>Optional</sup> <a name="activation_rules_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activationRulesInput"></a>

```python
activation_rules_input: RoleManagementPolicyActivationRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a>

---

##### `active_assignment_rules_input`<sup>Optional</sup> <a name="active_assignment_rules_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.activeAssignmentRulesInput"></a>

```python
active_assignment_rules_input: RoleManagementPolicyActiveAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a>

---

##### `eligible_assignment_rules_input`<sup>Optional</sup> <a name="eligible_assignment_rules_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.eligibleAssignmentRulesInput"></a>

```python
eligible_assignment_rules_input: RoleManagementPolicyEligibleAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notification_rules_input`<sup>Optional</sup> <a name="notification_rules_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.notificationRulesInput"></a>

```python
notification_rules_input: RoleManagementPolicyNotificationRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a>

---

##### `role_definition_id_input`<sup>Optional</sup> <a name="role_definition_id_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.roleDefinitionIdInput"></a>

```python
role_definition_id_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RoleManagementPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RoleManagementPolicyActivationRules <a name="RoleManagementPolicyActivationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyActivationRules(
  approval_stage: RoleManagementPolicyActivationRulesApprovalStage = None,
  maximum_duration: str = None,
  require_approval: typing.Union[bool, IResolvable] = None,
  required_conditional_access_authentication_context: str = None,
  require_justification: typing.Union[bool, IResolvable] = None,
  require_multifactor_authentication: typing.Union[bool, IResolvable] = None,
  require_ticket_info: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.approvalStage">approval_stage</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a></code> | approval_stage block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.maximumDuration">maximum_duration</a></code> | <code>str</code> | The time after which the an activation can be valid for. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an approval is required for activation. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext">required_conditional_access_authentication_context</a></code> | <code>str</code> | Whether a conditional access context is required during activation. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireJustification">require_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether a justification is required during activation. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireMultifactorAuthentication">require_multifactor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether multi-factor authentication is required during activation. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireTicketInfo">require_ticket_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether ticket information is required during activation. |

---

##### `approval_stage`<sup>Optional</sup> <a name="approval_stage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.approvalStage"></a>

```python
approval_stage: RoleManagementPolicyActivationRulesApprovalStage
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a>

approval_stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#approval_stage RoleManagementPolicy#approval_stage}

---

##### `maximum_duration`<sup>Optional</sup> <a name="maximum_duration" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.maximumDuration"></a>

```python
maximum_duration: str
```

- *Type:* str

The time after which the an activation can be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#maximum_duration RoleManagementPolicy#maximum_duration}

---

##### `require_approval`<sup>Optional</sup> <a name="require_approval" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireApproval"></a>

```python
require_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an approval is required for activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_approval RoleManagementPolicy#require_approval}

---

##### `required_conditional_access_authentication_context`<sup>Optional</sup> <a name="required_conditional_access_authentication_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requiredConditionalAccessAuthenticationContext"></a>

```python
required_conditional_access_authentication_context: str
```

- *Type:* str

Whether a conditional access context is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#required_conditional_access_authentication_context RoleManagementPolicy#required_conditional_access_authentication_context}

---

##### `require_justification`<sup>Optional</sup> <a name="require_justification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireJustification"></a>

```python
require_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a justification is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_justification RoleManagementPolicy#require_justification}

---

##### `require_multifactor_authentication`<sup>Optional</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireMultifactorAuthentication"></a>

```python
require_multifactor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multi-factor authentication is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_multifactor_authentication RoleManagementPolicy#require_multifactor_authentication}

---

##### `require_ticket_info`<sup>Optional</sup> <a name="require_ticket_info" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules.property.requireTicketInfo"></a>

```python
require_ticket_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether ticket information is required during activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_ticket_info RoleManagementPolicy#require_ticket_info}

---

### RoleManagementPolicyActivationRulesApprovalStage <a name="RoleManagementPolicyActivationRulesApprovalStage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage(
  primary_approver: typing.Union[IResolvable, typing.List[RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover">primary_approver</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]</code> | primary_approver block. |

---

##### `primary_approver`<sup>Required</sup> <a name="primary_approver" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage.property.primaryApprover"></a>

```python
primary_approver: typing.Union[IResolvable, typing.List[RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

primary_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#primary_approver RoleManagementPolicy#primary_approver}

---

### RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover <a name="RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover(
  object_id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId">object_id</a></code> | <code>str</code> | The ID of the object to act as an approver. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type">type</a></code> | <code>str</code> | The type of object acting as an approver. |

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

The ID of the object to act as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#object_id RoleManagementPolicy#object_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.property.type"></a>

```python
type: str
```

- *Type:* str

The type of object acting as an approver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#type RoleManagementPolicy#type}

---

### RoleManagementPolicyActiveAssignmentRules <a name="RoleManagementPolicyActiveAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules(
  expiration_required: typing.Union[bool, IResolvable] = None,
  expire_after: str = None,
  require_justification: typing.Union[bool, IResolvable] = None,
  require_multifactor_authentication: typing.Union[bool, IResolvable] = None,
  require_ticket_info: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.expirationRequired">expiration_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.expireAfter">expire_after</a></code> | <code>str</code> | The duration after which assignments expire. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireJustification">require_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether a justification is required to make an assignment. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication">require_multifactor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether multi-factor authentication is required to make an assignment. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo">require_ticket_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether ticket information is required to make an assignment. |

---

##### `expiration_required`<sup>Optional</sup> <a name="expiration_required" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.expirationRequired"></a>

```python
expiration_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#expiration_required RoleManagementPolicy#expiration_required}

---

##### `expire_after`<sup>Optional</sup> <a name="expire_after" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#expire_after RoleManagementPolicy#expire_after}

---

##### `require_justification`<sup>Optional</sup> <a name="require_justification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireJustification"></a>

```python
require_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a justification is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_justification RoleManagementPolicy#require_justification}

---

##### `require_multifactor_authentication`<sup>Optional</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireMultifactorAuthentication"></a>

```python
require_multifactor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multi-factor authentication is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_multifactor_authentication RoleManagementPolicy#require_multifactor_authentication}

---

##### `require_ticket_info`<sup>Optional</sup> <a name="require_ticket_info" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules.property.requireTicketInfo"></a>

```python
require_ticket_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether ticket information is required to make an assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#require_ticket_info RoleManagementPolicy#require_ticket_info}

---

### RoleManagementPolicyConfig <a name="RoleManagementPolicyConfig" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_definition_id: str,
  scope: str,
  activation_rules: RoleManagementPolicyActivationRules = None,
  active_assignment_rules: RoleManagementPolicyActiveAssignmentRules = None,
  eligible_assignment_rules: RoleManagementPolicyEligibleAssignmentRules = None,
  id: str = None,
  notification_rules: RoleManagementPolicyNotificationRules = None,
  timeouts: RoleManagementPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | ID of the Azure Role to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.scope">scope</a></code> | <code>str</code> | The scope of the role to which this policy will apply. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.activationRules">activation_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a></code> | activation_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.activeAssignmentRules">active_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a></code> | active_assignment_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.eligibleAssignmentRules">eligible_assignment_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a></code> | eligible_assignment_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#id RoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.notificationRules">notification_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a></code> | notification_rules block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

ID of the Azure Role to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#role_definition_id RoleManagementPolicy#role_definition_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope of the role to which this policy will apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#scope RoleManagementPolicy#scope}

---

##### `activation_rules`<sup>Optional</sup> <a name="activation_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.activationRules"></a>

```python
activation_rules: RoleManagementPolicyActivationRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a>

activation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#activation_rules RoleManagementPolicy#activation_rules}

---

##### `active_assignment_rules`<sup>Optional</sup> <a name="active_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.activeAssignmentRules"></a>

```python
active_assignment_rules: RoleManagementPolicyActiveAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a>

active_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#active_assignment_rules RoleManagementPolicy#active_assignment_rules}

---

##### `eligible_assignment_rules`<sup>Optional</sup> <a name="eligible_assignment_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.eligibleAssignmentRules"></a>

```python
eligible_assignment_rules: RoleManagementPolicyEligibleAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a>

eligible_assignment_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#eligible_assignment_rules RoleManagementPolicy#eligible_assignment_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#id RoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_rules`<sup>Optional</sup> <a name="notification_rules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.notificationRules"></a>

```python
notification_rules: RoleManagementPolicyNotificationRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a>

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_rules RoleManagementPolicy#notification_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyConfig.property.timeouts"></a>

```python
timeouts: RoleManagementPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#timeouts RoleManagementPolicy#timeouts}

---

### RoleManagementPolicyEligibleAssignmentRules <a name="RoleManagementPolicyEligibleAssignmentRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules(
  expiration_required: typing.Union[bool, IResolvable] = None,
  expire_after: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.property.expirationRequired">expiration_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Must the assignment have an expiry date. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.property.expireAfter">expire_after</a></code> | <code>str</code> | The duration after which assignments expire. |

---

##### `expiration_required`<sup>Optional</sup> <a name="expiration_required" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.property.expirationRequired"></a>

```python
expiration_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must the assignment have an expiry date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#expiration_required RoleManagementPolicy#expiration_required}

---

##### `expire_after`<sup>Optional</sup> <a name="expire_after" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

The duration after which assignments expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#expire_after RoleManagementPolicy#expire_after}

---

### RoleManagementPolicyNotificationRules <a name="RoleManagementPolicyNotificationRules" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRules(
  active_assignments: RoleManagementPolicyNotificationRulesActiveAssignments = None,
  eligible_activations: RoleManagementPolicyNotificationRulesEligibleActivations = None,
  eligible_assignments: RoleManagementPolicyNotificationRulesEligibleAssignments = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.activeAssignments">active_assignments</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a></code> | active_assignments block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.eligibleActivations">eligible_activations</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a></code> | eligible_activations block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.eligibleAssignments">eligible_assignments</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | eligible_assignments block. |

---

##### `active_assignments`<sup>Optional</sup> <a name="active_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.activeAssignments"></a>

```python
active_assignments: RoleManagementPolicyNotificationRulesActiveAssignments
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a>

active_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#active_assignments RoleManagementPolicy#active_assignments}

---

##### `eligible_activations`<sup>Optional</sup> <a name="eligible_activations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.eligibleActivations"></a>

```python
eligible_activations: RoleManagementPolicyNotificationRulesEligibleActivations
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a>

eligible_activations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#eligible_activations RoleManagementPolicy#eligible_activations}

---

##### `eligible_assignments`<sup>Optional</sup> <a name="eligible_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules.property.eligibleAssignments"></a>

```python
eligible_assignments: RoleManagementPolicyNotificationRulesEligibleAssignments
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a>

eligible_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#eligible_assignments RoleManagementPolicy#eligible_assignments}

---

### RoleManagementPolicyNotificationRulesActiveAssignments <a name="RoleManagementPolicyNotificationRulesActiveAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments(
  admin_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications = None,
  approver_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications = None,
  assignee_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.adminNotifications"></a>

```python
admin_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}

---

##### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.approverNotifications"></a>

```python
approver_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}

---

##### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments.property.assigneeNotifications"></a>

```python
assignee_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}

---

### RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleActivations <a name="RoleManagementPolicyNotificationRulesEligibleActivations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations(
  admin_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications = None,
  approver_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications = None,
  assignee_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.adminNotifications"></a>

```python
admin_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}

---

##### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.approverNotifications"></a>

```python
approver_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}

---

##### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations.property.assigneeNotifications"></a>

```python
assignee_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}

---

### RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications <a name="RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications <a name="RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications <a name="RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleAssignments <a name="RoleManagementPolicyNotificationRulesEligibleAssignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments(
  admin_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications = None,
  approver_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications = None,
  assignee_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | assignee_notifications block. |

---

##### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.adminNotifications"></a>

```python
admin_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}

---

##### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.approverNotifications"></a>

```python
approver_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}

---

##### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments.property.assigneeNotifications"></a>

```python
assignee_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}

---

### RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the default recipients are notified. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel">notification_level</a></code> | <code>str</code> | What level of notifications are sent. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | The additional recipients to notify. |

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

##### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

### RoleManagementPolicyTimeouts <a name="RoleManagementPolicyTimeouts" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#create RoleManagementPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#delete RoleManagementPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#read RoleManagementPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#update RoleManagementPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#create RoleManagementPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#delete RoleManagementPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#read RoleManagementPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#update RoleManagementPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RoleManagementPolicyActivationRulesApprovalStageOutputReference <a name="RoleManagementPolicyActivationRulesApprovalStageOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover">put_primary_approver</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary_approver` <a name="put_primary_approver" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover"></a>

```python
def put_primary_approver(
  value: typing.Union[IResolvable, typing.List[RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.putPrimaryApprover.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover">primary_approver</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput">primary_approver_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_approver`<sup>Required</sup> <a name="primary_approver" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover"></a>

```python
primary_approver: RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a>

---

##### `primary_approver_input`<sup>Optional</sup> <a name="primary_approver_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApproverInput"></a>

```python
primary_approver_input: typing.Union[IResolvable, typing.List[RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyActivationRulesApprovalStage
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a>

---


### RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList <a name="RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

---


### RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference <a name="RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]

---


### RoleManagementPolicyActivationRulesOutputReference <a name="RoleManagementPolicyActivationRulesOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.putApprovalStage">put_approval_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetApprovalStage">reset_approval_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration">reset_maximum_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireApproval">reset_require_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext">reset_required_conditional_access_authentication_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireJustification">reset_require_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication">reset_require_multifactor_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo">reset_require_ticket_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_approval_stage` <a name="put_approval_stage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.putApprovalStage"></a>

```python
def put_approval_stage(
  primary_approver: typing.Union[IResolvable, typing.List[RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover]]
) -> None
```

###### `primary_approver`<sup>Required</sup> <a name="primary_approver" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.putApprovalStage.parameter.primaryApprover"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">RoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>]]

primary_approver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#primary_approver RoleManagementPolicy#primary_approver}

---

##### `reset_approval_stage` <a name="reset_approval_stage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetApprovalStage"></a>

```python
def reset_approval_stage() -> None
```

##### `reset_maximum_duration` <a name="reset_maximum_duration" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetMaximumDuration"></a>

```python
def reset_maximum_duration() -> None
```

##### `reset_require_approval` <a name="reset_require_approval" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireApproval"></a>

```python
def reset_require_approval() -> None
```

##### `reset_required_conditional_access_authentication_context` <a name="reset_required_conditional_access_authentication_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequiredConditionalAccessAuthenticationContext"></a>

```python
def reset_required_conditional_access_authentication_context() -> None
```

##### `reset_require_justification` <a name="reset_require_justification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireJustification"></a>

```python
def reset_require_justification() -> None
```

##### `reset_require_multifactor_authentication` <a name="reset_require_multifactor_authentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```python
def reset_require_multifactor_authentication() -> None
```

##### `reset_require_ticket_info` <a name="reset_require_ticket_info" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.resetRequireTicketInfo"></a>

```python
def reset_require_ticket_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.approvalStage">approval_stage</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference">RoleManagementPolicyActivationRulesApprovalStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput">approval_stage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput">maximum_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput">require_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput">required_conditional_access_authentication_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput">require_justification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput">require_multifactor_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput">require_ticket_info_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.maximumDuration">maximum_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext">required_conditional_access_authentication_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireJustification">require_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication">require_multifactor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo">require_ticket_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_stage`<sup>Required</sup> <a name="approval_stage" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.approvalStage"></a>

```python
approval_stage: RoleManagementPolicyActivationRulesApprovalStageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStageOutputReference">RoleManagementPolicyActivationRulesApprovalStageOutputReference</a>

---

##### `approval_stage_input`<sup>Optional</sup> <a name="approval_stage_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.approvalStageInput"></a>

```python
approval_stage_input: RoleManagementPolicyActivationRulesApprovalStage
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesApprovalStage">RoleManagementPolicyActivationRulesApprovalStage</a>

---

##### `maximum_duration_input`<sup>Optional</sup> <a name="maximum_duration_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.maximumDurationInput"></a>

```python
maximum_duration_input: str
```

- *Type:* str

---

##### `require_approval_input`<sup>Optional</sup> <a name="require_approval_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireApprovalInput"></a>

```python
require_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_conditional_access_authentication_context_input`<sup>Optional</sup> <a name="required_conditional_access_authentication_context_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContextInput"></a>

```python
required_conditional_access_authentication_context_input: str
```

- *Type:* str

---

##### `require_justification_input`<sup>Optional</sup> <a name="require_justification_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireJustificationInput"></a>

```python
require_justification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_multifactor_authentication_input`<sup>Optional</sup> <a name="require_multifactor_authentication_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```python
require_multifactor_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_ticket_info_input`<sup>Optional</sup> <a name="require_ticket_info_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfoInput"></a>

```python
require_ticket_info_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_duration`<sup>Required</sup> <a name="maximum_duration" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.maximumDuration"></a>

```python
maximum_duration: str
```

- *Type:* str

---

##### `require_approval`<sup>Required</sup> <a name="require_approval" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireApproval"></a>

```python
require_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_conditional_access_authentication_context`<sup>Required</sup> <a name="required_conditional_access_authentication_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext"></a>

```python
required_conditional_access_authentication_context: str
```

- *Type:* str

---

##### `require_justification`<sup>Required</sup> <a name="require_justification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireJustification"></a>

```python
require_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_multifactor_authentication`<sup>Required</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication"></a>

```python
require_multifactor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_ticket_info`<sup>Required</sup> <a name="require_ticket_info" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo"></a>

```python
require_ticket_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRulesOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyActivationRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActivationRules">RoleManagementPolicyActivationRules</a>

---


### RoleManagementPolicyActiveAssignmentRulesOutputReference <a name="RoleManagementPolicyActiveAssignmentRulesOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired">reset_expiration_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter">reset_expire_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification">reset_require_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication">reset_require_multifactor_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo">reset_require_ticket_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_required` <a name="reset_expiration_required" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpirationRequired"></a>

```python
def reset_expiration_required() -> None
```

##### `reset_expire_after` <a name="reset_expire_after" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetExpireAfter"></a>

```python
def reset_expire_after() -> None
```

##### `reset_require_justification` <a name="reset_require_justification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireJustification"></a>

```python
def reset_require_justification() -> None
```

##### `reset_require_multifactor_authentication` <a name="reset_require_multifactor_authentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireMultifactorAuthentication"></a>

```python
def reset_require_multifactor_authentication() -> None
```

##### `reset_require_ticket_info` <a name="reset_require_ticket_info" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.resetRequireTicketInfo"></a>

```python
def reset_require_ticket_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput">expiration_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput">expire_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput">require_justification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput">require_multifactor_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput">require_ticket_info_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired">expiration_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter">expire_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification">require_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication">require_multifactor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo">require_ticket_info</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_required_input`<sup>Optional</sup> <a name="expiration_required_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```python
expiration_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expire_after_input`<sup>Optional</sup> <a name="expire_after_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfterInput"></a>

```python
expire_after_input: str
```

- *Type:* str

---

##### `require_justification_input`<sup>Optional</sup> <a name="require_justification_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustificationInput"></a>

```python
require_justification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_multifactor_authentication_input`<sup>Optional</sup> <a name="require_multifactor_authentication_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthenticationInput"></a>

```python
require_multifactor_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_ticket_info_input`<sup>Optional</sup> <a name="require_ticket_info_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfoInput"></a>

```python
require_ticket_info_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_required`<sup>Required</sup> <a name="expiration_required" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired"></a>

```python
expiration_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expire_after`<sup>Required</sup> <a name="expire_after" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

---

##### `require_justification`<sup>Required</sup> <a name="require_justification" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification"></a>

```python
require_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_multifactor_authentication`<sup>Required</sup> <a name="require_multifactor_authentication" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication"></a>

```python
require_multifactor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_ticket_info`<sup>Required</sup> <a name="require_ticket_info" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo"></a>

```python
require_ticket_info: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyActiveAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyActiveAssignmentRules">RoleManagementPolicyActiveAssignmentRules</a>

---


### RoleManagementPolicyEligibleAssignmentRulesOutputReference <a name="RoleManagementPolicyEligibleAssignmentRulesOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired">reset_expiration_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter">reset_expire_after</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_required` <a name="reset_expiration_required" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpirationRequired"></a>

```python
def reset_expiration_required() -> None
```

##### `reset_expire_after` <a name="reset_expire_after" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.resetExpireAfter"></a>

```python
def reset_expire_after() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput">expiration_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput">expire_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired">expiration_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter">expire_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_required_input`<sup>Optional</sup> <a name="expiration_required_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequiredInput"></a>

```python
expiration_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expire_after_input`<sup>Optional</sup> <a name="expire_after_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfterInput"></a>

```python
expire_after_input: str
```

- *Type:* str

---

##### `expiration_required`<sup>Required</sup> <a name="expiration_required" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired"></a>

```python
expiration_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expire_after`<sup>Required</sup> <a name="expire_after" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter"></a>

```python
expire_after: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyEligibleAssignmentRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyEligibleAssignmentRules">RoleManagementPolicyEligibleAssignmentRules</a>

---


### RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---


### RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---


### RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---


### RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference <a name="RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications">put_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications">put_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications">put_assignee_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications">reset_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications">reset_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications">reset_assignee_notifications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_notifications` <a name="put_admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications"></a>

```python
def put_admin_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAdminNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

##### `put_approver_notifications` <a name="put_approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications"></a>

```python
def put_approver_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putApproverNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

##### `put_assignee_notifications` <a name="put_assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications"></a>

```python
def put_assignee_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.putAssigneeNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

##### `reset_admin_notifications` <a name="reset_admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAdminNotifications"></a>

```python
def reset_admin_notifications() -> None
```

##### `reset_approver_notifications` <a name="reset_approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetApproverNotifications"></a>

```python
def reset_approver_notifications() -> None
```

##### `reset_assignee_notifications` <a name="reset_assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resetAssigneeNotifications"></a>

```python
def reset_assignee_notifications() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput">admin_notifications_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput">approver_notifications_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput">assignee_notifications_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_notifications`<sup>Required</sup> <a name="admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications"></a>

```python
admin_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference</a>

---

##### `approver_notifications`<sup>Required</sup> <a name="approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications"></a>

```python
approver_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference</a>

---

##### `assignee_notifications`<sup>Required</sup> <a name="assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications"></a>

```python
assignee_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `admin_notifications_input`<sup>Optional</sup> <a name="admin_notifications_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotificationsInput"></a>

```python
admin_notifications_input: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---

##### `approver_notifications_input`<sup>Optional</sup> <a name="approver_notifications_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotificationsInput"></a>

```python
approver_notifications_input: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---

##### `assignee_notifications_input`<sup>Optional</sup> <a name="assignee_notifications_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```python
assignee_notifications_input: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesActiveAssignments
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a>

---


### RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications">put_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications">put_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications">put_assignee_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications">reset_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications">reset_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications">reset_assignee_notifications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_notifications` <a name="put_admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications"></a>

```python
def put_admin_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAdminNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

##### `put_approver_notifications` <a name="put_approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications"></a>

```python
def put_approver_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putApproverNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

##### `put_assignee_notifications` <a name="put_assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications"></a>

```python
def put_assignee_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.putAssigneeNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

##### `reset_admin_notifications` <a name="reset_admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAdminNotifications"></a>

```python
def reset_admin_notifications() -> None
```

##### `reset_approver_notifications` <a name="reset_approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetApproverNotifications"></a>

```python
def reset_approver_notifications() -> None
```

##### `reset_assignee_notifications` <a name="reset_assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resetAssigneeNotifications"></a>

```python
def reset_assignee_notifications() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput">admin_notifications_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput">approver_notifications_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput">assignee_notifications_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_notifications`<sup>Required</sup> <a name="admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications"></a>

```python
admin_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference</a>

---

##### `approver_notifications`<sup>Required</sup> <a name="approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications"></a>

```python
approver_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference</a>

---

##### `assignee_notifications`<sup>Required</sup> <a name="assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications"></a>

```python
assignee_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference</a>

---

##### `admin_notifications_input`<sup>Optional</sup> <a name="admin_notifications_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotificationsInput"></a>

```python
admin_notifications_input: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---

##### `approver_notifications_input`<sup>Optional</sup> <a name="approver_notifications_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotificationsInput"></a>

```python
approver_notifications_input: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---

##### `assignee_notifications_input`<sup>Optional</sup> <a name="assignee_notifications_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotificationsInput"></a>

```python
assignee_notifications_input: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesEligibleActivations
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a>

---


### RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients">reset_additional_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_recipients` <a name="reset_additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resetAdditionalRecipients"></a>

```python
def reset_additional_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput">additional_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput">default_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput">notification_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">additional_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">default_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">notification_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_recipients_input`<sup>Optional</sup> <a name="additional_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipientsInput"></a>

```python
additional_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients_input`<sup>Optional</sup> <a name="default_recipients_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipientsInput"></a>

```python
default_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level_input`<sup>Optional</sup> <a name="notification_level_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevelInput"></a>

```python
notification_level_input: str
```

- *Type:* str

---

##### `additional_recipients`<sup>Required</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```python
additional_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```python
default_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```python
notification_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---


### RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference <a name="RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications">put_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications">put_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications">put_assignee_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications">reset_admin_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications">reset_approver_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications">reset_assignee_notifications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_notifications` <a name="put_admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications"></a>

```python
def put_admin_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAdminNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

##### `put_approver_notifications` <a name="put_approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications"></a>

```python
def put_approver_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putApproverNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

##### `put_assignee_notifications` <a name="put_assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications"></a>

```python
def put_assignee_notifications(
  default_recipients: typing.Union[bool, IResolvable],
  notification_level: str,
  additional_recipients: typing.List[str] = None
) -> None
```

###### `default_recipients`<sup>Required</sup> <a name="default_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications.parameter.defaultRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the default recipients are notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#default_recipients RoleManagementPolicy#default_recipients}

---

###### `notification_level`<sup>Required</sup> <a name="notification_level" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications.parameter.notificationLevel"></a>

- *Type:* str

What level of notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#notification_level RoleManagementPolicy#notification_level}

---

###### `additional_recipients`<sup>Optional</sup> <a name="additional_recipients" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.putAssigneeNotifications.parameter.additionalRecipients"></a>

- *Type:* typing.List[str]

The additional recipients to notify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#additional_recipients RoleManagementPolicy#additional_recipients}

---

##### `reset_admin_notifications` <a name="reset_admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAdminNotifications"></a>

```python
def reset_admin_notifications() -> None
```

##### `reset_approver_notifications` <a name="reset_approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetApproverNotifications"></a>

```python
def reset_approver_notifications() -> None
```

##### `reset_assignee_notifications` <a name="reset_assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resetAssigneeNotifications"></a>

```python
def reset_assignee_notifications() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications">admin_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications">approver_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications">assignee_notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput">admin_notifications_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput">approver_notifications_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput">assignee_notifications_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_notifications`<sup>Required</sup> <a name="admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications"></a>

```python
admin_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference</a>

---

##### `approver_notifications`<sup>Required</sup> <a name="approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications"></a>

```python
approver_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference</a>

---

##### `assignee_notifications`<sup>Required</sup> <a name="assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications"></a>

```python
assignee_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference</a>

---

##### `admin_notifications_input`<sup>Optional</sup> <a name="admin_notifications_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotificationsInput"></a>

```python
admin_notifications_input: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---

##### `approver_notifications_input`<sup>Optional</sup> <a name="approver_notifications_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotificationsInput"></a>

```python
approver_notifications_input: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---

##### `assignee_notifications_input`<sup>Optional</sup> <a name="assignee_notifications_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotificationsInput"></a>

```python
assignee_notifications_input: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRulesEligibleAssignments
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a>

---


### RoleManagementPolicyNotificationRulesOutputReference <a name="RoleManagementPolicyNotificationRulesOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments">put_active_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations">put_eligible_activations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments">put_eligible_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments">reset_active_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations">reset_eligible_activations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments">reset_eligible_assignments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_assignments` <a name="put_active_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments"></a>

```python
def put_active_assignments(
  admin_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications = None,
  approver_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications = None,
  assignee_notifications: RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications = None
) -> None
```

###### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments.parameter.adminNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}

---

###### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments.parameter.approverNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}

---

###### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putActiveAssignments.parameter.assigneeNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}

---

##### `put_eligible_activations` <a name="put_eligible_activations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations"></a>

```python
def put_eligible_activations(
  admin_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications = None,
  approver_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications = None,
  assignee_notifications: RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications = None
) -> None
```

###### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations.parameter.adminNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}

---

###### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations.parameter.approverNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}

---

###### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleActivations.parameter.assigneeNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}

---

##### `put_eligible_assignments` <a name="put_eligible_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments"></a>

```python
def put_eligible_assignments(
  admin_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications = None,
  approver_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications = None,
  assignee_notifications: RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications = None
) -> None
```

###### `admin_notifications`<sup>Optional</sup> <a name="admin_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments.parameter.adminNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#admin_notifications RoleManagementPolicy#admin_notifications}

---

###### `approver_notifications`<sup>Optional</sup> <a name="approver_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments.parameter.approverNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#approver_notifications RoleManagementPolicy#approver_notifications}

---

###### `assignee_notifications`<sup>Optional</sup> <a name="assignee_notifications" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.putEligibleAssignments.parameter.assigneeNotifications"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">RoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

assignee_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/role_management_policy#assignee_notifications RoleManagementPolicy#assignee_notifications}

---

##### `reset_active_assignments` <a name="reset_active_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetActiveAssignments"></a>

```python
def reset_active_assignments() -> None
```

##### `reset_eligible_activations` <a name="reset_eligible_activations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetEligibleActivations"></a>

```python
def reset_eligible_activations() -> None
```

##### `reset_eligible_assignments` <a name="reset_eligible_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.resetEligibleAssignments"></a>

```python
def reset_eligible_assignments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments">active_assignments</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations">eligible_activations</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments">eligible_assignments</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput">active_assignments_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput">eligible_activations_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput">eligible_assignments_input</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_assignments`<sup>Required</sup> <a name="active_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments"></a>

```python
active_assignments: RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference">RoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference</a>

---

##### `eligible_activations`<sup>Required</sup> <a name="eligible_activations" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations"></a>

```python
eligible_activations: RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference">RoleManagementPolicyNotificationRulesEligibleActivationsOutputReference</a>

---

##### `eligible_assignments`<sup>Required</sup> <a name="eligible_assignments" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments"></a>

```python
eligible_assignments: RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference">RoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference</a>

---

##### `active_assignments_input`<sup>Optional</sup> <a name="active_assignments_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.activeAssignmentsInput"></a>

```python
active_assignments_input: RoleManagementPolicyNotificationRulesActiveAssignments
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesActiveAssignments">RoleManagementPolicyNotificationRulesActiveAssignments</a>

---

##### `eligible_activations_input`<sup>Optional</sup> <a name="eligible_activations_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivationsInput"></a>

```python
eligible_activations_input: RoleManagementPolicyNotificationRulesEligibleActivations
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleActivations">RoleManagementPolicyNotificationRulesEligibleActivations</a>

---

##### `eligible_assignments_input`<sup>Optional</sup> <a name="eligible_assignments_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignmentsInput"></a>

```python
eligible_assignments_input: RoleManagementPolicyNotificationRulesEligibleAssignments
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesEligibleAssignments">RoleManagementPolicyNotificationRulesEligibleAssignments</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRulesOutputReference.property.internalValue"></a>

```python
internal_value: RoleManagementPolicyNotificationRules
```

- *Type:* <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyNotificationRules">RoleManagementPolicyNotificationRules</a>

---


### RoleManagementPolicyTimeoutsOutputReference <a name="RoleManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import role_management_policy

roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RoleManagementPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.roleManagementPolicy.RoleManagementPolicyTimeouts">RoleManagementPolicyTimeouts</a>]

---




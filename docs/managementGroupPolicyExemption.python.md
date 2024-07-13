# `managementGroupPolicyExemption` Submodule <a name="`managementGroupPolicyExemption` Submodule" id="@cdktf/provider-azurerm.managementGroupPolicyExemption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupPolicyExemption <a name="ManagementGroupPolicyExemption" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption azurerm_management_group_policy_exemption}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_exemption

managementGroupPolicyExemption.ManagementGroupPolicyExemption(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exemption_category: str,
  management_group_id: str,
  name: str,
  policy_assignment_id: str,
  description: str = None,
  display_name: str = None,
  expires_on: str = None,
  id: str = None,
  metadata: str = None,
  policy_definition_reference_ids: typing.List[str] = None,
  timeouts: ManagementGroupPolicyExemptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.exemptionCategory">exemption_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.managementGroupId">management_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.expiresOn">expires_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.policyDefinitionReferenceIds">policy_definition_reference_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exemption_category`<sup>Required</sup> <a name="exemption_category" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.exemptionCategory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}.

---

##### `management_group_id`<sup>Required</sup> <a name="management_group_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.managementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.policyAssignmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.expiresOn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.metadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}.

---

##### `policy_definition_reference_ids`<sup>Optional</sup> <a name="policy_definition_reference_ids" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.policyDefinitionReferenceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#timeouts ManagementGroupPolicyExemption#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetExpiresOn">reset_expires_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetPolicyDefinitionReferenceIds">reset_policy_definition_reference_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#create ManagementGroupPolicyExemption#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#delete ManagementGroupPolicyExemption#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#read ManagementGroupPolicyExemption#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#update ManagementGroupPolicyExemption#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_expires_on` <a name="reset_expires_on" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetExpiresOn"></a>

```python
def reset_expires_on() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_policy_definition_reference_ids` <a name="reset_policy_definition_reference_ids" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetPolicyDefinitionReferenceIds"></a>

```python
def reset_policy_definition_reference_ids() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagementGroupPolicyExemption resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_exemption

managementGroupPolicyExemption.ManagementGroupPolicyExemption.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_exemption

managementGroupPolicyExemption.ManagementGroupPolicyExemption.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_exemption

managementGroupPolicyExemption.ManagementGroupPolicyExemption.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_exemption

managementGroupPolicyExemption.ManagementGroupPolicyExemption.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagementGroupPolicyExemption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagementGroupPolicyExemption to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagementGroupPolicyExemption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagementGroupPolicyExemption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference">ManagementGroupPolicyExemptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategoryInput">exemption_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOnInput">expires_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupIdInput">management_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentIdInput">policy_assignment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIdsInput">policy_definition_reference_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategory">exemption_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupId">management_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIds">policy_definition_reference_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeouts"></a>

```python
timeouts: ManagementGroupPolicyExemptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference">ManagementGroupPolicyExemptionTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exemption_category_input`<sup>Optional</sup> <a name="exemption_category_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategoryInput"></a>

```python
exemption_category_input: str
```

- *Type:* str

---

##### `expires_on_input`<sup>Optional</sup> <a name="expires_on_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOnInput"></a>

```python
expires_on_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_group_id_input`<sup>Optional</sup> <a name="management_group_id_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupIdInput"></a>

```python
management_group_id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_assignment_id_input`<sup>Optional</sup> <a name="policy_assignment_id_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentIdInput"></a>

```python
policy_assignment_id_input: str
```

- *Type:* str

---

##### `policy_definition_reference_ids_input`<sup>Optional</sup> <a name="policy_definition_reference_ids_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIdsInput"></a>

```python
policy_definition_reference_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ManagementGroupPolicyExemptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exemption_category`<sup>Required</sup> <a name="exemption_category" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.exemptionCategory"></a>

```python
exemption_category: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_group_id`<sup>Required</sup> <a name="management_group_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.managementGroupId"></a>

```python
management_group_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

---

##### `policy_definition_reference_ids`<sup>Required</sup> <a name="policy_definition_reference_ids" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.policyDefinitionReferenceIds"></a>

```python
policy_definition_reference_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemption.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupPolicyExemptionConfig <a name="ManagementGroupPolicyExemptionConfig" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_exemption

managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exemption_category: str,
  management_group_id: str,
  name: str,
  policy_assignment_id: str,
  description: str = None,
  display_name: str = None,
  expires_on: str = None,
  id: str = None,
  metadata: str = None,
  policy_definition_reference_ids: typing.List[str] = None,
  timeouts: ManagementGroupPolicyExemptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.exemptionCategory">exemption_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.managementGroupId">management_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.expiresOn">expires_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyDefinitionReferenceIds">policy_definition_reference_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exemption_category`<sup>Required</sup> <a name="exemption_category" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.exemptionCategory"></a>

```python
exemption_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#exemption_category ManagementGroupPolicyExemption#exemption_category}.

---

##### `management_group_id`<sup>Required</sup> <a name="management_group_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.managementGroupId"></a>

```python
management_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#management_group_id ManagementGroupPolicyExemption#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#name ManagementGroupPolicyExemption#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#policy_assignment_id ManagementGroupPolicyExemption#policy_assignment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#description ManagementGroupPolicyExemption#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#display_name ManagementGroupPolicyExemption#display_name}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#expires_on ManagementGroupPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#id ManagementGroupPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#metadata ManagementGroupPolicyExemption#metadata}.

---

##### `policy_definition_reference_ids`<sup>Optional</sup> <a name="policy_definition_reference_ids" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.policyDefinitionReferenceIds"></a>

```python
policy_definition_reference_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#policy_definition_reference_ids ManagementGroupPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionConfig.property.timeouts"></a>

```python
timeouts: ManagementGroupPolicyExemptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#timeouts ManagementGroupPolicyExemption#timeouts}

---

### ManagementGroupPolicyExemptionTimeouts <a name="ManagementGroupPolicyExemptionTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_exemption

managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#create ManagementGroupPolicyExemption#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#delete ManagementGroupPolicyExemption#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#read ManagementGroupPolicyExemption#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#update ManagementGroupPolicyExemption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#create ManagementGroupPolicyExemption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#delete ManagementGroupPolicyExemption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#read ManagementGroupPolicyExemption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/management_group_policy_exemption#update ManagementGroupPolicyExemption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupPolicyExemptionTimeoutsOutputReference <a name="ManagementGroupPolicyExemptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_exemption

managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagementGroupPolicyExemptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.managementGroupPolicyExemption.ManagementGroupPolicyExemptionTimeouts">ManagementGroupPolicyExemptionTimeouts</a>]

---




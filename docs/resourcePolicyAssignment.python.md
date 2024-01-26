# `resourcePolicyAssignment` Submodule <a name="`resourcePolicyAssignment` Submodule" id="@cdktf/provider-azurerm.resourcePolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePolicyAssignment <a name="ResourcePolicyAssignment" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment azurerm_resource_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignment(
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
  policy_definition_id: str,
  resource_id: str,
  description: str = None,
  display_name: str = None,
  enforce: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: ResourcePolicyAssignmentIdentity = None,
  location: str = None,
  metadata: str = None,
  non_compliance_message: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentNonComplianceMessage]] = None,
  not_scopes: typing.List[str] = None,
  overrides: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverrides]] = None,
  parameters: str = None,
  resource_selectors: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectors]] = None,
  timeouts: ResourcePolicyAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#policy_definition_id ResourcePolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#resource_id ResourcePolicyAssignment#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#description ResourcePolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#display_name ResourcePolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#enforce ResourcePolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#id ResourcePolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#location ResourcePolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#metadata ResourcePolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.nonComplianceMessage">non_compliance_message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]]</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.notScopes">not_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#not_scopes ResourcePolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.overrides">overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]]</code> | overrides block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#parameters ResourcePolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.resourceSelectors">resource_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]]</code> | resource_selectors block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}.

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.policyDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#policy_definition_id ResourcePolicyAssignment#policy_definition_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#resource_id ResourcePolicyAssignment#resource_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#description ResourcePolicyAssignment#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#display_name ResourcePolicyAssignment#display_name}.

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.enforce"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#enforce ResourcePolicyAssignment#enforce}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#id ResourcePolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#identity ResourcePolicyAssignment#identity}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#location ResourcePolicyAssignment#location}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.metadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#metadata ResourcePolicyAssignment#metadata}.

---

##### `non_compliance_message`<sup>Optional</sup> <a name="non_compliance_message" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.nonComplianceMessage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]]

non_compliance_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#non_compliance_message ResourcePolicyAssignment#non_compliance_message}

---

##### `not_scopes`<sup>Optional</sup> <a name="not_scopes" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.notScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#not_scopes ResourcePolicyAssignment#not_scopes}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.overrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#overrides ResourcePolicyAssignment#overrides}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.parameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#parameters ResourcePolicyAssignment#parameters}.

---

##### `resource_selectors`<sup>Optional</sup> <a name="resource_selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.resourceSelectors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]]

resource_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#resource_selectors ResourcePolicyAssignment#resource_selectors}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#timeouts ResourcePolicyAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putNonComplianceMessage">put_non_compliance_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putResourceSelectors">put_resource_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetEnforce">reset_enforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetNonComplianceMessage">reset_non_compliance_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetNotScopes">reset_not_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetOverrides">reset_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetResourceSelectors">reset_resource_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#type ResourcePolicyAssignment#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#identity_ids ResourcePolicyAssignment#identity_ids}.

---

##### `put_non_compliance_message` <a name="put_non_compliance_message" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putNonComplianceMessage"></a>

```python
def put_non_compliance_message(
  value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentNonComplianceMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putNonComplianceMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]]

---

##### `put_overrides` <a name="put_overrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putOverrides"></a>

```python
def put_overrides(
  value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]]

---

##### `put_resource_selectors` <a name="put_resource_selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putResourceSelectors"></a>

```python
def put_resource_selectors(
  value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putResourceSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#create ResourcePolicyAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#delete ResourcePolicyAssignment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#read ResourcePolicyAssignment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#update ResourcePolicyAssignment#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enforce` <a name="reset_enforce" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetEnforce"></a>

```python
def reset_enforce() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_non_compliance_message` <a name="reset_non_compliance_message" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetNonComplianceMessage"></a>

```python
def reset_non_compliance_message() -> None
```

##### `reset_not_scopes` <a name="reset_not_scopes" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetNotScopes"></a>

```python
def reset_not_scopes() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetOverrides"></a>

```python
def reset_overrides() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_resource_selectors` <a name="reset_resource_selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetResourceSelectors"></a>

```python
def reset_resource_selectors() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ResourcePolicyAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ResourcePolicyAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourcePolicyAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourcePolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourcePolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference">ResourcePolicyAssignmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nonComplianceMessage">non_compliance_message</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList">ResourcePolicyAssignmentNonComplianceMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList">ResourcePolicyAssignmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceSelectors">resource_selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList">ResourcePolicyAssignmentResourceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference">ResourcePolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.enforceInput">enforce_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nonComplianceMessageInput">non_compliance_message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.notScopesInput">not_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.overridesInput">overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.policyDefinitionIdInput">policy_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceSelectorsInput">resource_selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.notScopes">not_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.identity"></a>

```python
identity: ResourcePolicyAssignmentIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference">ResourcePolicyAssignmentIdentityOutputReference</a>

---

##### `non_compliance_message`<sup>Required</sup> <a name="non_compliance_message" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nonComplianceMessage"></a>

```python
non_compliance_message: ResourcePolicyAssignmentNonComplianceMessageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList">ResourcePolicyAssignmentNonComplianceMessageList</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.overrides"></a>

```python
overrides: ResourcePolicyAssignmentOverridesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList">ResourcePolicyAssignmentOverridesList</a>

---

##### `resource_selectors`<sup>Required</sup> <a name="resource_selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceSelectors"></a>

```python
resource_selectors: ResourcePolicyAssignmentResourceSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList">ResourcePolicyAssignmentResourceSelectorsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.timeouts"></a>

```python
timeouts: ResourcePolicyAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference">ResourcePolicyAssignmentTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.enforceInput"></a>

```python
enforce_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.identityInput"></a>

```python
identity_input: ResourcePolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_compliance_message_input`<sup>Optional</sup> <a name="non_compliance_message_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.nonComplianceMessageInput"></a>

```python
non_compliance_message_input: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentNonComplianceMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]]

---

##### `not_scopes_input`<sup>Optional</sup> <a name="not_scopes_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.notScopesInput"></a>

```python
not_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.overridesInput"></a>

```python
overrides_input: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `policy_definition_id_input`<sup>Optional</sup> <a name="policy_definition_id_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.policyDefinitionIdInput"></a>

```python
policy_definition_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_selectors_input`<sup>Optional</sup> <a name="resource_selectors_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceSelectorsInput"></a>

```python
resource_selectors_input: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ResourcePolicyAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `not_scopes`<sup>Required</sup> <a name="not_scopes" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.notScopes"></a>

```python
not_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePolicyAssignmentConfig <a name="ResourcePolicyAssignmentConfig" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy_definition_id: str,
  resource_id: str,
  description: str = None,
  display_name: str = None,
  enforce: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: ResourcePolicyAssignmentIdentity = None,
  location: str = None,
  metadata: str = None,
  non_compliance_message: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentNonComplianceMessage]] = None,
  not_scopes: typing.List[str] = None,
  overrides: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverrides]] = None,
  parameters: str = None,
  resource_selectors: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectors]] = None,
  timeouts: ResourcePolicyAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#policy_definition_id ResourcePolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#resource_id ResourcePolicyAssignment#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#description ResourcePolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#display_name ResourcePolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#enforce ResourcePolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#id ResourcePolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#location ResourcePolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#metadata ResourcePolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.nonComplianceMessage">non_compliance_message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]]</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.notScopes">not_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#not_scopes ResourcePolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.overrides">overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]]</code> | overrides block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#parameters ResourcePolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.resourceSelectors">resource_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]]</code> | resource_selectors block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}.

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#policy_definition_id ResourcePolicyAssignment#policy_definition_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#resource_id ResourcePolicyAssignment#resource_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#description ResourcePolicyAssignment#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#display_name ResourcePolicyAssignment#display_name}.

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#enforce ResourcePolicyAssignment#enforce}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#id ResourcePolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.identity"></a>

```python
identity: ResourcePolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#identity ResourcePolicyAssignment#identity}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#location ResourcePolicyAssignment#location}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#metadata ResourcePolicyAssignment#metadata}.

---

##### `non_compliance_message`<sup>Optional</sup> <a name="non_compliance_message" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.nonComplianceMessage"></a>

```python
non_compliance_message: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentNonComplianceMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]]

non_compliance_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#non_compliance_message ResourcePolicyAssignment#non_compliance_message}

---

##### `not_scopes`<sup>Optional</sup> <a name="not_scopes" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.notScopes"></a>

```python
not_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#not_scopes ResourcePolicyAssignment#not_scopes}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.overrides"></a>

```python
overrides: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#overrides ResourcePolicyAssignment#overrides}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#parameters ResourcePolicyAssignment#parameters}.

---

##### `resource_selectors`<sup>Optional</sup> <a name="resource_selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.resourceSelectors"></a>

```python
resource_selectors: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]]

resource_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#resource_selectors ResourcePolicyAssignment#resource_selectors}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentConfig.property.timeouts"></a>

```python
timeouts: ResourcePolicyAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#timeouts ResourcePolicyAssignment#timeouts}

---

### ResourcePolicyAssignmentIdentity <a name="ResourcePolicyAssignmentIdentity" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#type ResourcePolicyAssignment#type}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#identity_ids ResourcePolicyAssignment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#type ResourcePolicyAssignment#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#identity_ids ResourcePolicyAssignment#identity_ids}.

---

### ResourcePolicyAssignmentNonComplianceMessage <a name="ResourcePolicyAssignmentNonComplianceMessage" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage(
  content: str,
  policy_definition_reference_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#content ResourcePolicyAssignment#content}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#policy_definition_reference_id ResourcePolicyAssignment#policy_definition_reference_id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#content ResourcePolicyAssignment#content}.

---

##### `policy_definition_reference_id`<sup>Optional</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#policy_definition_reference_id ResourcePolicyAssignment#policy_definition_reference_id}.

---

### ResourcePolicyAssignmentOverrides <a name="ResourcePolicyAssignmentOverrides" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentOverrides(
  value: str,
  selectors: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverridesSelectors]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#value ResourcePolicyAssignment#value}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.property.selectors">selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors">ResourcePolicyAssignmentOverridesSelectors</a>]]</code> | selectors block. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#value ResourcePolicyAssignment#value}.

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides.property.selectors"></a>

```python
selectors: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverridesSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors">ResourcePolicyAssignmentOverridesSelectors</a>]]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#selectors ResourcePolicyAssignment#selectors}

---

### ResourcePolicyAssignmentOverridesSelectors <a name="ResourcePolicyAssignmentOverridesSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors(
  in: typing.List[str] = None,
  not_in: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.property.in">in</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#in ResourcePolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#not_in ResourcePolicyAssignment#not_in}. |

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#in ResourcePolicyAssignment#in}.

---

##### `not_in`<sup>Optional</sup> <a name="not_in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#not_in ResourcePolicyAssignment#not_in}.

---

### ResourcePolicyAssignmentResourceSelectors <a name="ResourcePolicyAssignmentResourceSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors(
  selectors: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectorsSelectors]],
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.property.selectors">selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors">ResourcePolicyAssignmentResourceSelectorsSelectors</a>]]</code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}. |

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.property.selectors"></a>

```python
selectors: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectorsSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors">ResourcePolicyAssignmentResourceSelectorsSelectors</a>]]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#selectors ResourcePolicyAssignment#selectors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#name ResourcePolicyAssignment#name}.

---

### ResourcePolicyAssignmentResourceSelectorsSelectors <a name="ResourcePolicyAssignmentResourceSelectorsSelectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors(
  kind: str,
  in: typing.List[str] = None,
  not_in: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#kind ResourcePolicyAssignment#kind}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.in">in</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#in ResourcePolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#not_in ResourcePolicyAssignment#not_in}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#kind ResourcePolicyAssignment#kind}.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#in ResourcePolicyAssignment#in}.

---

##### `not_in`<sup>Optional</sup> <a name="not_in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#not_in ResourcePolicyAssignment#not_in}.

---

### ResourcePolicyAssignmentTimeouts <a name="ResourcePolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#create ResourcePolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#delete ResourcePolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#read ResourcePolicyAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#update ResourcePolicyAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#create ResourcePolicyAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#delete ResourcePolicyAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#read ResourcePolicyAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/resource_policy_assignment#update ResourcePolicyAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcePolicyAssignmentIdentityOutputReference <a name="ResourcePolicyAssignmentIdentityOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ResourcePolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentIdentity">ResourcePolicyAssignmentIdentity</a>

---


### ResourcePolicyAssignmentNonComplianceMessageList <a name="ResourcePolicyAssignmentNonComplianceMessageList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourcePolicyAssignmentNonComplianceMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentNonComplianceMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]]

---


### ResourcePolicyAssignmentNonComplianceMessageOutputReference <a name="ResourcePolicyAssignmentNonComplianceMessageOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId">reset_policy_definition_reference_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy_definition_reference_id` <a name="reset_policy_definition_reference_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId"></a>

```python
def reset_policy_definition_reference_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput">policy_definition_reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `policy_definition_reference_id_input`<sup>Optional</sup> <a name="policy_definition_reference_id_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput"></a>

```python
policy_definition_reference_id_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `policy_definition_reference_id`<sup>Required</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourcePolicyAssignmentNonComplianceMessage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentNonComplianceMessage">ResourcePolicyAssignmentNonComplianceMessage</a>]

---


### ResourcePolicyAssignmentOverridesList <a name="ResourcePolicyAssignmentOverridesList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourcePolicyAssignmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]]

---


### ResourcePolicyAssignmentOverridesOutputReference <a name="ResourcePolicyAssignmentOverridesOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resetSelectors">reset_selectors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_selectors` <a name="put_selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.putSelectors"></a>

```python
def put_selectors(
  value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverridesSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.putSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors">ResourcePolicyAssignmentOverridesSelectors</a>]]

---

##### `reset_selectors` <a name="reset_selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.resetSelectors"></a>

```python
def reset_selectors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList">ResourcePolicyAssignmentOverridesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.selectorsInput">selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors">ResourcePolicyAssignmentOverridesSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.selectors"></a>

```python
selectors: ResourcePolicyAssignmentOverridesSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList">ResourcePolicyAssignmentOverridesSelectorsList</a>

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.selectorsInput"></a>

```python
selectors_input: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverridesSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors">ResourcePolicyAssignmentOverridesSelectors</a>]]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourcePolicyAssignmentOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverrides">ResourcePolicyAssignmentOverrides</a>]

---


### ResourcePolicyAssignmentOverridesSelectorsList <a name="ResourcePolicyAssignmentOverridesSelectorsList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourcePolicyAssignmentOverridesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors">ResourcePolicyAssignmentOverridesSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentOverridesSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors">ResourcePolicyAssignmentOverridesSelectors</a>]]

---


### ResourcePolicyAssignmentOverridesSelectorsOutputReference <a name="ResourcePolicyAssignmentOverridesSelectorsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resetNotIn">reset_not_in</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in` <a name="reset_in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_not_in` <a name="reset_not_in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.resetNotIn"></a>

```python
def reset_not_in() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.inInput">in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.notInInput">not_in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.in">in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors">ResourcePolicyAssignmentOverridesSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.inInput"></a>

```python
in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_in_input`<sup>Optional</sup> <a name="not_in_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.notInInput"></a>

```python
not_in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_in`<sup>Required</sup> <a name="not_in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourcePolicyAssignmentOverridesSelectors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentOverridesSelectors">ResourcePolicyAssignmentOverridesSelectors</a>]

---


### ResourcePolicyAssignmentResourceSelectorsList <a name="ResourcePolicyAssignmentResourceSelectorsList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourcePolicyAssignmentResourceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]]

---


### ResourcePolicyAssignmentResourceSelectorsOutputReference <a name="ResourcePolicyAssignmentResourceSelectorsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_selectors` <a name="put_selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.putSelectors"></a>

```python
def put_selectors(
  value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectorsSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.putSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors">ResourcePolicyAssignmentResourceSelectorsSelectors</a>]]

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList">ResourcePolicyAssignmentResourceSelectorsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput">selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors">ResourcePolicyAssignmentResourceSelectorsSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.selectors"></a>

```python
selectors: ResourcePolicyAssignmentResourceSelectorsSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList">ResourcePolicyAssignmentResourceSelectorsSelectorsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput"></a>

```python
selectors_input: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectorsSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors">ResourcePolicyAssignmentResourceSelectorsSelectors</a>]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourcePolicyAssignmentResourceSelectors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectors">ResourcePolicyAssignmentResourceSelectors</a>]

---


### ResourcePolicyAssignmentResourceSelectorsSelectorsList <a name="ResourcePolicyAssignmentResourceSelectorsSelectorsList" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors">ResourcePolicyAssignmentResourceSelectorsSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourcePolicyAssignmentResourceSelectorsSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors">ResourcePolicyAssignmentResourceSelectorsSelectors</a>]]

---


### ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference <a name="ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn">reset_not_in</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in` <a name="reset_in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_not_in` <a name="reset_not_in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn"></a>

```python
def reset_not_in() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput">in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput">not_in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in">in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors">ResourcePolicyAssignmentResourceSelectorsSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput"></a>

```python
in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `not_in_input`<sup>Optional</sup> <a name="not_in_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput"></a>

```python
not_in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `not_in`<sup>Required</sup> <a name="not_in" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourcePolicyAssignmentResourceSelectorsSelectors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentResourceSelectorsSelectors">ResourcePolicyAssignmentResourceSelectorsSelectors</a>]

---


### ResourcePolicyAssignmentTimeoutsOutputReference <a name="ResourcePolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import resource_policy_assignment

resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ResourcePolicyAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.resourcePolicyAssignment.ResourcePolicyAssignmentTimeouts">ResourcePolicyAssignmentTimeouts</a>]

---




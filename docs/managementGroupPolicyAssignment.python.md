# `azurerm_management_group_policy_assignment`

Refer to the Terraform Registory for docs: [`azurerm_management_group_policy_assignment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment).

# `managementGroupPolicyAssignment` Submodule <a name="`managementGroupPolicyAssignment` Submodule" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupPolicyAssignment <a name="ManagementGroupPolicyAssignment" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment azurerm_management_group_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  management_group_id: str,
  name: str,
  policy_definition_id: str,
  description: str = None,
  display_name: str = None,
  enforce: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: ManagementGroupPolicyAssignmentIdentity = None,
  location: str = None,
  metadata: str = None,
  non_compliance_message: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentNonComplianceMessage]] = None,
  not_scopes: typing.List[str] = None,
  overrides: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverrides]] = None,
  parameters: str = None,
  resource_selectors: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectors]] = None,
  timeouts: ManagementGroupPolicyAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.managementGroupId">management_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#management_group_id ManagementGroupPolicyAssignment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#policy_definition_id ManagementGroupPolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#description ManagementGroupPolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#display_name ManagementGroupPolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#enforce ManagementGroupPolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#id ManagementGroupPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#location ManagementGroupPolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#metadata ManagementGroupPolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.nonComplianceMessage">non_compliance_message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>]]</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.notScopes">not_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#not_scopes ManagementGroupPolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.overrides">overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>]]</code> | overrides block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#parameters ManagementGroupPolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.resourceSelectors">resource_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>]]</code> | resource_selectors block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_group_id`<sup>Required</sup> <a name="management_group_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.managementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#management_group_id ManagementGroupPolicyAssignment#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}.

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.policyDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#policy_definition_id ManagementGroupPolicyAssignment#policy_definition_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#description ManagementGroupPolicyAssignment#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#display_name ManagementGroupPolicyAssignment#display_name}.

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.enforce"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#enforce ManagementGroupPolicyAssignment#enforce}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#id ManagementGroupPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#identity ManagementGroupPolicyAssignment#identity}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#location ManagementGroupPolicyAssignment#location}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.metadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#metadata ManagementGroupPolicyAssignment#metadata}.

---

##### `non_compliance_message`<sup>Optional</sup> <a name="non_compliance_message" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.nonComplianceMessage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>]]

non_compliance_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#non_compliance_message ManagementGroupPolicyAssignment#non_compliance_message}

---

##### `not_scopes`<sup>Optional</sup> <a name="not_scopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.notScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#not_scopes ManagementGroupPolicyAssignment#not_scopes}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.overrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>]]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#overrides ManagementGroupPolicyAssignment#overrides}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.parameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#parameters ManagementGroupPolicyAssignment#parameters}.

---

##### `resource_selectors`<sup>Optional</sup> <a name="resource_selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.resourceSelectors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>]]

resource_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#resource_selectors ManagementGroupPolicyAssignment#resource_selectors}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#timeouts ManagementGroupPolicyAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putNonComplianceMessage">put_non_compliance_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putResourceSelectors">put_resource_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetEnforce">reset_enforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNonComplianceMessage">reset_non_compliance_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNotScopes">reset_not_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetOverrides">reset_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetResourceSelectors">reset_resource_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#type ManagementGroupPolicyAssignment#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#identity_ids ManagementGroupPolicyAssignment#identity_ids}.

---

##### `put_non_compliance_message` <a name="put_non_compliance_message" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putNonComplianceMessage"></a>

```python
def put_non_compliance_message(
  value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentNonComplianceMessage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putNonComplianceMessage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>]]

---

##### `put_overrides` <a name="put_overrides" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putOverrides"></a>

```python
def put_overrides(
  value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>]]

---

##### `put_resource_selectors` <a name="put_resource_selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putResourceSelectors"></a>

```python
def put_resource_selectors(
  value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putResourceSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#create ManagementGroupPolicyAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#delete ManagementGroupPolicyAssignment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#read ManagementGroupPolicyAssignment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#update ManagementGroupPolicyAssignment#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enforce` <a name="reset_enforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetEnforce"></a>

```python
def reset_enforce() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_non_compliance_message` <a name="reset_non_compliance_message" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNonComplianceMessage"></a>

```python
def reset_non_compliance_message() -> None
```

##### `reset_not_scopes` <a name="reset_not_scopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetNotScopes"></a>

```python
def reset_not_scopes() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetOverrides"></a>

```python
def reset_overrides() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_resource_selectors` <a name="reset_resource_selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetResourceSelectors"></a>

```python
def reset_resource_selectors() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference">ManagementGroupPolicyAssignmentIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessage">non_compliance_message</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList">ManagementGroupPolicyAssignmentNonComplianceMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList">ManagementGroupPolicyAssignmentOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.resourceSelectors">resource_selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList">ManagementGroupPolicyAssignmentResourceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference">ManagementGroupPolicyAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforceInput">enforce_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupIdInput">management_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessageInput">non_compliance_message_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopesInput">not_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.overridesInput">overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionIdInput">policy_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.resourceSelectorsInput">resource_selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupId">management_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopes">not_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identity"></a>

```python
identity: ManagementGroupPolicyAssignmentIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference">ManagementGroupPolicyAssignmentIdentityOutputReference</a>

---

##### `non_compliance_message`<sup>Required</sup> <a name="non_compliance_message" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessage"></a>

```python
non_compliance_message: ManagementGroupPolicyAssignmentNonComplianceMessageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList">ManagementGroupPolicyAssignmentNonComplianceMessageList</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.overrides"></a>

```python
overrides: ManagementGroupPolicyAssignmentOverridesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList">ManagementGroupPolicyAssignmentOverridesList</a>

---

##### `resource_selectors`<sup>Required</sup> <a name="resource_selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.resourceSelectors"></a>

```python
resource_selectors: ManagementGroupPolicyAssignmentResourceSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList">ManagementGroupPolicyAssignmentResourceSelectorsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeouts"></a>

```python
timeouts: ManagementGroupPolicyAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference">ManagementGroupPolicyAssignmentTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforceInput"></a>

```python
enforce_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.identityInput"></a>

```python
identity_input: ManagementGroupPolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `management_group_id_input`<sup>Optional</sup> <a name="management_group_id_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupIdInput"></a>

```python
management_group_id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_compliance_message_input`<sup>Optional</sup> <a name="non_compliance_message_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.nonComplianceMessageInput"></a>

```python
non_compliance_message_input: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentNonComplianceMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>]]

---

##### `not_scopes_input`<sup>Optional</sup> <a name="not_scopes_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopesInput"></a>

```python
not_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.overridesInput"></a>

```python
overrides_input: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>]]

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `policy_definition_id_input`<sup>Optional</sup> <a name="policy_definition_id_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionIdInput"></a>

```python
policy_definition_id_input: str
```

- *Type:* str

---

##### `resource_selectors_input`<sup>Optional</sup> <a name="resource_selectors_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.resourceSelectorsInput"></a>

```python
resource_selectors_input: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ManagementGroupPolicyAssignmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `management_group_id`<sup>Required</sup> <a name="management_group_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.managementGroupId"></a>

```python
management_group_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `not_scopes`<sup>Required</sup> <a name="not_scopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.notScopes"></a>

```python
not_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupPolicyAssignmentConfig <a name="ManagementGroupPolicyAssignmentConfig" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  management_group_id: str,
  name: str,
  policy_definition_id: str,
  description: str = None,
  display_name: str = None,
  enforce: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: ManagementGroupPolicyAssignmentIdentity = None,
  location: str = None,
  metadata: str = None,
  non_compliance_message: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentNonComplianceMessage]] = None,
  not_scopes: typing.List[str] = None,
  overrides: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverrides]] = None,
  parameters: str = None,
  resource_selectors: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectors]] = None,
  timeouts: ManagementGroupPolicyAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.managementGroupId">management_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#management_group_id ManagementGroupPolicyAssignment#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#policy_definition_id ManagementGroupPolicyAssignment#policy_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#description ManagementGroupPolicyAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#display_name ManagementGroupPolicyAssignment#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.enforce">enforce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#enforce ManagementGroupPolicyAssignment#enforce}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#id ManagementGroupPolicyAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#location ManagementGroupPolicyAssignment#location}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#metadata ManagementGroupPolicyAssignment#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.nonComplianceMessage">non_compliance_message</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>]]</code> | non_compliance_message block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.notScopes">not_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#not_scopes ManagementGroupPolicyAssignment#not_scopes}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.overrides">overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>]]</code> | overrides block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.parameters">parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#parameters ManagementGroupPolicyAssignment#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.resourceSelectors">resource_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>]]</code> | resource_selectors block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_group_id`<sup>Required</sup> <a name="management_group_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.managementGroupId"></a>

```python
management_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#management_group_id ManagementGroupPolicyAssignment#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}.

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#policy_definition_id ManagementGroupPolicyAssignment#policy_definition_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#description ManagementGroupPolicyAssignment#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#display_name ManagementGroupPolicyAssignment#display_name}.

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.enforce"></a>

```python
enforce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#enforce ManagementGroupPolicyAssignment#enforce}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#id ManagementGroupPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.identity"></a>

```python
identity: ManagementGroupPolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#identity ManagementGroupPolicyAssignment#identity}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#location ManagementGroupPolicyAssignment#location}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#metadata ManagementGroupPolicyAssignment#metadata}.

---

##### `non_compliance_message`<sup>Optional</sup> <a name="non_compliance_message" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.nonComplianceMessage"></a>

```python
non_compliance_message: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentNonComplianceMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>]]

non_compliance_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#non_compliance_message ManagementGroupPolicyAssignment#non_compliance_message}

---

##### `not_scopes`<sup>Optional</sup> <a name="not_scopes" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.notScopes"></a>

```python
not_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#not_scopes ManagementGroupPolicyAssignment#not_scopes}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.overrides"></a>

```python
overrides: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>]]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#overrides ManagementGroupPolicyAssignment#overrides}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#parameters ManagementGroupPolicyAssignment#parameters}.

---

##### `resource_selectors`<sup>Optional</sup> <a name="resource_selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.resourceSelectors"></a>

```python
resource_selectors: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>]]

resource_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#resource_selectors ManagementGroupPolicyAssignment#resource_selectors}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentConfig.property.timeouts"></a>

```python
timeouts: ManagementGroupPolicyAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#timeouts ManagementGroupPolicyAssignment#timeouts}

---

### ManagementGroupPolicyAssignmentIdentity <a name="ManagementGroupPolicyAssignmentIdentity" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#type ManagementGroupPolicyAssignment#type}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#identity_ids ManagementGroupPolicyAssignment#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#type ManagementGroupPolicyAssignment#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#identity_ids ManagementGroupPolicyAssignment#identity_ids}.

---

### ManagementGroupPolicyAssignmentNonComplianceMessage <a name="ManagementGroupPolicyAssignmentNonComplianceMessage" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage(
  content: str,
  policy_definition_reference_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#content ManagementGroupPolicyAssignment#content}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#policy_definition_reference_id ManagementGroupPolicyAssignment#policy_definition_reference_id}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#content ManagementGroupPolicyAssignment#content}.

---

##### `policy_definition_reference_id`<sup>Optional</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#policy_definition_reference_id ManagementGroupPolicyAssignment#policy_definition_reference_id}.

---

### ManagementGroupPolicyAssignmentOverrides <a name="ManagementGroupPolicyAssignmentOverrides" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides(
  value: str,
  selectors: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverridesSelectors]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#value ManagementGroupPolicyAssignment#value}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides.property.selectors">selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors">ManagementGroupPolicyAssignmentOverridesSelectors</a>]]</code> | selectors block. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#value ManagementGroupPolicyAssignment#value}.

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides.property.selectors"></a>

```python
selectors: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverridesSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors">ManagementGroupPolicyAssignmentOverridesSelectors</a>]]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#selectors ManagementGroupPolicyAssignment#selectors}

---

### ManagementGroupPolicyAssignmentOverridesSelectors <a name="ManagementGroupPolicyAssignmentOverridesSelectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors(
  in: typing.List[str] = None,
  not_in: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors.property.in">in</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#in ManagementGroupPolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#not_in ManagementGroupPolicyAssignment#not_in}. |

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#in ManagementGroupPolicyAssignment#in}.

---

##### `not_in`<sup>Optional</sup> <a name="not_in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#not_in ManagementGroupPolicyAssignment#not_in}.

---

### ManagementGroupPolicyAssignmentResourceSelectors <a name="ManagementGroupPolicyAssignmentResourceSelectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors(
  selectors: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectorsSelectors]],
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors.property.selectors">selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors">ManagementGroupPolicyAssignmentResourceSelectorsSelectors</a>]]</code> | selectors block. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}. |

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors.property.selectors"></a>

```python
selectors: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectorsSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors">ManagementGroupPolicyAssignmentResourceSelectorsSelectors</a>]]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#selectors ManagementGroupPolicyAssignment#selectors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#name ManagementGroupPolicyAssignment#name}.

---

### ManagementGroupPolicyAssignmentResourceSelectorsSelectors <a name="ManagementGroupPolicyAssignmentResourceSelectorsSelectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors(
  kind: str,
  in: typing.List[str] = None,
  not_in: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#kind ManagementGroupPolicyAssignment#kind}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors.property.in">in</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#in ManagementGroupPolicyAssignment#in}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#not_in ManagementGroupPolicyAssignment#not_in}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#kind ManagementGroupPolicyAssignment#kind}.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#in ManagementGroupPolicyAssignment#in}.

---

##### `not_in`<sup>Optional</sup> <a name="not_in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#not_in ManagementGroupPolicyAssignment#not_in}.

---

### ManagementGroupPolicyAssignmentTimeouts <a name="ManagementGroupPolicyAssignmentTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#create ManagementGroupPolicyAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#delete ManagementGroupPolicyAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#read ManagementGroupPolicyAssignment#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#update ManagementGroupPolicyAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#create ManagementGroupPolicyAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#delete ManagementGroupPolicyAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#read ManagementGroupPolicyAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/management_group_policy_assignment#update ManagementGroupPolicyAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupPolicyAssignmentIdentityOutputReference <a name="ManagementGroupPolicyAssignmentIdentityOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ManagementGroupPolicyAssignmentIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentIdentity">ManagementGroupPolicyAssignmentIdentity</a>

---


### ManagementGroupPolicyAssignmentNonComplianceMessageList <a name="ManagementGroupPolicyAssignmentNonComplianceMessageList" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentNonComplianceMessage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>]]

---


### ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference <a name="ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId">reset_policy_definition_reference_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy_definition_reference_id` <a name="reset_policy_definition_reference_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.resetPolicyDefinitionReferenceId"></a>

```python
def reset_policy_definition_reference_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput">policy_definition_reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId">policy_definition_reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `policy_definition_reference_id_input`<sup>Optional</sup> <a name="policy_definition_reference_id_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceIdInput"></a>

```python
policy_definition_reference_id_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `policy_definition_reference_id`<sup>Required</sup> <a name="policy_definition_reference_id" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.policyDefinitionReferenceId"></a>

```python
policy_definition_reference_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ManagementGroupPolicyAssignmentNonComplianceMessage, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentNonComplianceMessage">ManagementGroupPolicyAssignmentNonComplianceMessage</a>, cdktf.IResolvable]

---


### ManagementGroupPolicyAssignmentOverridesList <a name="ManagementGroupPolicyAssignmentOverridesList" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementGroupPolicyAssignmentOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>]]

---


### ManagementGroupPolicyAssignmentOverridesOutputReference <a name="ManagementGroupPolicyAssignmentOverridesOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.resetSelectors">reset_selectors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_selectors` <a name="put_selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.putSelectors"></a>

```python
def put_selectors(
  value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverridesSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.putSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors">ManagementGroupPolicyAssignmentOverridesSelectors</a>]]

---

##### `reset_selectors` <a name="reset_selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.resetSelectors"></a>

```python
def reset_selectors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList">ManagementGroupPolicyAssignmentOverridesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.selectorsInput">selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors">ManagementGroupPolicyAssignmentOverridesSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.selectors"></a>

```python
selectors: ManagementGroupPolicyAssignmentOverridesSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList">ManagementGroupPolicyAssignmentOverridesSelectorsList</a>

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.selectorsInput"></a>

```python
selectors_input: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverridesSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors">ManagementGroupPolicyAssignmentOverridesSelectors</a>]]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ManagementGroupPolicyAssignmentOverrides, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverrides">ManagementGroupPolicyAssignmentOverrides</a>, cdktf.IResolvable]

---


### ManagementGroupPolicyAssignmentOverridesSelectorsList <a name="ManagementGroupPolicyAssignmentOverridesSelectorsList" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors">ManagementGroupPolicyAssignmentOverridesSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentOverridesSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors">ManagementGroupPolicyAssignmentOverridesSelectors</a>]]

---


### ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference <a name="ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.resetNotIn">reset_not_in</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in` <a name="reset_in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_not_in` <a name="reset_not_in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.resetNotIn"></a>

```python
def reset_not_in() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.inInput">in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.notInInput">not_in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.in">in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors">ManagementGroupPolicyAssignmentOverridesSelectors</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.inInput"></a>

```python
in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_in_input`<sup>Optional</sup> <a name="not_in_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.notInInput"></a>

```python
not_in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_in`<sup>Required</sup> <a name="not_in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ManagementGroupPolicyAssignmentOverridesSelectors, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentOverridesSelectors">ManagementGroupPolicyAssignmentOverridesSelectors</a>, cdktf.IResolvable]

---


### ManagementGroupPolicyAssignmentResourceSelectorsList <a name="ManagementGroupPolicyAssignmentResourceSelectorsList" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementGroupPolicyAssignmentResourceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>]]

---


### ManagementGroupPolicyAssignmentResourceSelectorsOutputReference <a name="ManagementGroupPolicyAssignmentResourceSelectorsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_selectors` <a name="put_selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.putSelectors"></a>

```python
def put_selectors(
  value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectorsSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.putSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors">ManagementGroupPolicyAssignmentResourceSelectorsSelectors</a>]]

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList">ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput">selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors">ManagementGroupPolicyAssignmentResourceSelectorsSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.selectors"></a>

```python
selectors: ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList">ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.selectorsInput"></a>

```python
selectors_input: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectorsSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors">ManagementGroupPolicyAssignmentResourceSelectorsSelectors</a>]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ManagementGroupPolicyAssignmentResourceSelectors, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectors">ManagementGroupPolicyAssignmentResourceSelectors</a>, cdktf.IResolvable]

---


### ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList <a name="ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors">ManagementGroupPolicyAssignmentResourceSelectorsSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagementGroupPolicyAssignmentResourceSelectorsSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors">ManagementGroupPolicyAssignmentResourceSelectorsSelectors</a>]]

---


### ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference <a name="ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn">reset_not_in</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in` <a name="reset_in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_not_in` <a name="reset_not_in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.resetNotIn"></a>

```python
def reset_not_in() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput">in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput">not_in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in">in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors">ManagementGroupPolicyAssignmentResourceSelectorsSelectors</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.inInput"></a>

```python
in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `not_in_input`<sup>Optional</sup> <a name="not_in_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notInInput"></a>

```python
not_in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `not_in`<sup>Required</sup> <a name="not_in" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ManagementGroupPolicyAssignmentResourceSelectorsSelectors, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentResourceSelectorsSelectors">ManagementGroupPolicyAssignmentResourceSelectorsSelectors</a>, cdktf.IResolvable]

---


### ManagementGroupPolicyAssignmentTimeoutsOutputReference <a name="ManagementGroupPolicyAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import management_group_policy_assignment

managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ManagementGroupPolicyAssignmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.managementGroupPolicyAssignment.ManagementGroupPolicyAssignmentTimeouts">ManagementGroupPolicyAssignmentTimeouts</a>, cdktf.IResolvable]

---




# `cdnFrontdoorSecurityPolicy` Submodule <a name="`cdnFrontdoorSecurityPolicy` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorSecurityPolicy <a name="CdnFrontdoorSecurityPolicy" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy azurerm_cdn_frontdoor_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_profile_id: str,
  name: str,
  security_policies: CdnFrontdoorSecurityPolicySecurityPolicies,
  id: str = None,
  timeouts: CdnFrontdoorSecurityPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.securityPolicies">security_policies</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | security_policies block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.cdnFrontdoorProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}.

---

##### `security_policies`<sup>Required</sup> <a name="security_policies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.securityPolicies"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

security_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#security_policies CdnFrontdoorSecurityPolicy#security_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#timeouts CdnFrontdoorSecurityPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putSecurityPolicies">put_security_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_security_policies` <a name="put_security_policies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putSecurityPolicies"></a>

```python
def put_security_policies(
  firewall: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall
) -> None
```

###### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putSecurityPolicies.parameter.firewall"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#firewall CdnFrontdoorSecurityPolicy#firewall}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#create CdnFrontdoorSecurityPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#delete CdnFrontdoorSecurityPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#read CdnFrontdoorSecurityPolicy#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CdnFrontdoorSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CdnFrontdoorSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CdnFrontdoorSecurityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CdnFrontdoorSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPolicies">security_policies</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference">CdnFrontdoorSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileIdInput">cdn_frontdoor_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPoliciesInput">security_policies_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_policies`<sup>Required</sup> <a name="security_policies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPolicies"></a>

```python
security_policies: CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeouts"></a>

```python
timeouts: CdnFrontdoorSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference">CdnFrontdoorSecurityPolicyTimeoutsOutputReference</a>

---

##### `cdn_frontdoor_profile_id_input`<sup>Optional</sup> <a name="cdn_frontdoor_profile_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileIdInput"></a>

```python
cdn_frontdoor_profile_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `security_policies_input`<sup>Optional</sup> <a name="security_policies_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPoliciesInput"></a>

```python
security_policies_input: CdnFrontdoorSecurityPolicySecurityPolicies
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CdnFrontdoorSecurityPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>]

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileId"></a>

```python
cdn_frontdoor_profile_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorSecurityPolicyConfig <a name="CdnFrontdoorSecurityPolicyConfig" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_profile_id: str,
  name: str,
  security_policies: CdnFrontdoorSecurityPolicySecurityPolicies,
  id: str = None,
  timeouts: CdnFrontdoorSecurityPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.securityPolicies">security_policies</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | security_policies block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.cdnFrontdoorProfileId"></a>

```python
cdn_frontdoor_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}.

---

##### `security_policies`<sup>Required</sup> <a name="security_policies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.securityPolicies"></a>

```python
security_policies: CdnFrontdoorSecurityPolicySecurityPolicies
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

security_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#security_policies CdnFrontdoorSecurityPolicy#security_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.timeouts"></a>

```python
timeouts: CdnFrontdoorSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#timeouts CdnFrontdoorSecurityPolicy#timeouts}

---

### CdnFrontdoorSecurityPolicySecurityPolicies <a name="CdnFrontdoorSecurityPolicySecurityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies(
  firewall: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | firewall block. |

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies.property.firewall"></a>

```python
firewall: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#firewall CdnFrontdoorSecurityPolicy#firewall}

---

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewall <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall(
  association: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation,
  cdn_frontdoor_firewall_policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.association">association</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | association block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.cdnFrontdoorFirewallPolicyId">cdn_frontdoor_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_firewall_policy_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_firewall_policy_id}. |

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.association"></a>

```python
association: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

association block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#association CdnFrontdoorSecurityPolicy#association}

---

##### `cdn_frontdoor_firewall_policy_id`<sup>Required</sup> <a name="cdn_frontdoor_firewall_policy_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.cdnFrontdoorFirewallPolicyId"></a>

```python
cdn_frontdoor_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_firewall_policy_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_firewall_policy_id}.

---

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation(
  domain: typing.Union[IResolvable, typing.List[CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain]],
  patterns_to_match: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.domain">domain</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]]</code> | domain block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.patternsToMatch">patterns_to_match</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#patterns_to_match CdnFrontdoorSecurityPolicy#patterns_to_match}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.domain"></a>

```python
domain: typing.Union[IResolvable, typing.List[CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]]

domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#domain CdnFrontdoorSecurityPolicy#domain}

---

##### `patterns_to_match`<sup>Required</sup> <a name="patterns_to_match" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.patternsToMatch"></a>

```python
patterns_to_match: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#patterns_to_match CdnFrontdoorSecurityPolicy#patterns_to_match}.

---

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain(
  cdn_frontdoor_domain_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.property.cdnFrontdoorDomainId">cdn_frontdoor_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_domain_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_domain_id}. |

---

##### `cdn_frontdoor_domain_id`<sup>Required</sup> <a name="cdn_frontdoor_domain_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.property.cdnFrontdoorDomainId"></a>

```python
cdn_frontdoor_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_domain_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_domain_id}.

---

### CdnFrontdoorSecurityPolicyTimeouts <a name="CdnFrontdoorSecurityPolicyTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#create CdnFrontdoorSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#delete CdnFrontdoorSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#read CdnFrontdoorSecurityPolicy#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#create CdnFrontdoorSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#delete CdnFrontdoorSecurityPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#read CdnFrontdoorSecurityPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]]

---


### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainIdInput">cdn_frontdoor_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainId">cdn_frontdoor_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cdn_frontdoor_domain_id_input`<sup>Optional</sup> <a name="cdn_frontdoor_domain_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainIdInput"></a>

```python
cdn_frontdoor_domain_id_input: str
```

- *Type:* str

---

##### `cdn_frontdoor_domain_id`<sup>Required</sup> <a name="cdn_frontdoor_domain_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainId"></a>

```python
cdn_frontdoor_domain_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]

---


### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.putDomain">put_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_domain` <a name="put_domain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.putDomain"></a>

```python
def put_domain(
  value: typing.Union[IResolvable, typing.List[CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.putDomain.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domain">domain</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domainInput">domain_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatchInput">patterns_to_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatch">patterns_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domain"></a>

```python
domain: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domainInput"></a>

```python
domain_input: typing.Union[IResolvable, typing.List[CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]]

---

##### `patterns_to_match_input`<sup>Optional</sup> <a name="patterns_to_match_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatchInput"></a>

```python
patterns_to_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `patterns_to_match`<sup>Required</sup> <a name="patterns_to_match" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatch"></a>

```python
patterns_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.internalValue"></a>

```python
internal_value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

---


### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation">put_association</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_association` <a name="put_association" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation"></a>

```python
def put_association(
  domain: typing.Union[IResolvable, typing.List[CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain]],
  patterns_to_match: typing.List[str]
) -> None
```

###### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation.parameter.domain"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>]]

domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#domain CdnFrontdoorSecurityPolicy#domain}

---

###### `patterns_to_match`<sup>Required</sup> <a name="patterns_to_match" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation.parameter.patternsToMatch"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#patterns_to_match CdnFrontdoorSecurityPolicy#patterns_to_match}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.association">association</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.associationInput">association_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyIdInput">cdn_frontdoor_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyId">cdn_frontdoor_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.association"></a>

```python
association: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference</a>

---

##### `association_input`<sup>Optional</sup> <a name="association_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.associationInput"></a>

```python
association_input: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

---

##### `cdn_frontdoor_firewall_policy_id_input`<sup>Optional</sup> <a name="cdn_frontdoor_firewall_policy_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyIdInput"></a>

```python
cdn_frontdoor_firewall_policy_id_input: str
```

- *Type:* str

---

##### `cdn_frontdoor_firewall_policy_id`<sup>Required</sup> <a name="cdn_frontdoor_firewall_policy_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyId"></a>

```python
cdn_frontdoor_firewall_policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.internalValue"></a>

```python
internal_value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

---


### CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall">put_firewall</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_firewall` <a name="put_firewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall"></a>

```python
def put_firewall(
  association: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation,
  cdn_frontdoor_firewall_policy_id: str
) -> None
```

###### `association`<sup>Required</sup> <a name="association" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall.parameter.association"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

association block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#association CdnFrontdoorSecurityPolicy#association}

---

###### `cdn_frontdoor_firewall_policy_id`<sup>Required</sup> <a name="cdn_frontdoor_firewall_policy_id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall.parameter.cdnFrontdoorFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_firewall_policy_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_firewall_policy_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewallInput">firewall_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewall"></a>

```python
firewall: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference</a>

---

##### `firewall_input`<sup>Optional</sup> <a name="firewall_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewallInput"></a>

```python
firewall_input: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: CdnFrontdoorSecurityPolicySecurityPolicies
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

---


### CdnFrontdoorSecurityPolicyTimeoutsOutputReference <a name="CdnFrontdoorSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_security_policy

cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorSecurityPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>]

---




# `applicationLoadBalancerSecurityPolicy` Submodule <a name="`applicationLoadBalancerSecurityPolicy` Submodule" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadBalancerSecurityPolicy <a name="ApplicationLoadBalancerSecurityPolicy" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy azurerm_application_load_balancer_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_load_balancer_security_policy

applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_load_balancer_id: str,
  location: str,
  name: str,
  web_application_firewall_policy_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ApplicationLoadBalancerSecurityPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.applicationLoadBalancerId">application_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#application_load_balancer_id ApplicationLoadBalancerSecurityPolicy#application_load_balancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#location ApplicationLoadBalancerSecurityPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#name ApplicationLoadBalancerSecurityPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.webApplicationFirewallPolicyId">web_application_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#web_application_firewall_policy_id ApplicationLoadBalancerSecurityPolicy#web_application_firewall_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#id ApplicationLoadBalancerSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#tags ApplicationLoadBalancerSecurityPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts">ApplicationLoadBalancerSecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `application_load_balancer_id`<sup>Required</sup> <a name="application_load_balancer_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.applicationLoadBalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#application_load_balancer_id ApplicationLoadBalancerSecurityPolicy#application_load_balancer_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#location ApplicationLoadBalancerSecurityPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#name ApplicationLoadBalancerSecurityPolicy#name}.

---

##### `web_application_firewall_policy_id`<sup>Required</sup> <a name="web_application_firewall_policy_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.webApplicationFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#web_application_firewall_policy_id ApplicationLoadBalancerSecurityPolicy#web_application_firewall_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#id ApplicationLoadBalancerSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#tags ApplicationLoadBalancerSecurityPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts">ApplicationLoadBalancerSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#timeouts ApplicationLoadBalancerSecurityPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#create ApplicationLoadBalancerSecurityPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#delete ApplicationLoadBalancerSecurityPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#read ApplicationLoadBalancerSecurityPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#update ApplicationLoadBalancerSecurityPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationLoadBalancerSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import application_load_balancer_security_policy

applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import application_load_balancer_security_policy

applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import application_load_balancer_security_policy

applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import application_load_balancer_security_policy

applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationLoadBalancerSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationLoadBalancerSecurityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationLoadBalancerSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadBalancerSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference">ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.applicationLoadBalancerIdInput">application_load_balancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts">ApplicationLoadBalancerSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.webApplicationFirewallPolicyIdInput">web_application_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.applicationLoadBalancerId">application_load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.webApplicationFirewallPolicyId">web_application_firewall_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.timeouts"></a>

```python
timeouts: ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference">ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference</a>

---

##### `application_load_balancer_id_input`<sup>Optional</sup> <a name="application_load_balancer_id_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.applicationLoadBalancerIdInput"></a>

```python
application_load_balancer_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApplicationLoadBalancerSecurityPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts">ApplicationLoadBalancerSecurityPolicyTimeouts</a>

---

##### `web_application_firewall_policy_id_input`<sup>Optional</sup> <a name="web_application_firewall_policy_id_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.webApplicationFirewallPolicyIdInput"></a>

```python
web_application_firewall_policy_id_input: str
```

- *Type:* str

---

##### `application_load_balancer_id`<sup>Required</sup> <a name="application_load_balancer_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.applicationLoadBalancerId"></a>

```python
application_load_balancer_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `web_application_firewall_policy_id`<sup>Required</sup> <a name="web_application_firewall_policy_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.webApplicationFirewallPolicyId"></a>

```python
web_application_firewall_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadBalancerSecurityPolicyConfig <a name="ApplicationLoadBalancerSecurityPolicyConfig" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_load_balancer_security_policy

applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_load_balancer_id: str,
  location: str,
  name: str,
  web_application_firewall_policy_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ApplicationLoadBalancerSecurityPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.applicationLoadBalancerId">application_load_balancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#application_load_balancer_id ApplicationLoadBalancerSecurityPolicy#application_load_balancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#location ApplicationLoadBalancerSecurityPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#name ApplicationLoadBalancerSecurityPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.webApplicationFirewallPolicyId">web_application_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#web_application_firewall_policy_id ApplicationLoadBalancerSecurityPolicy#web_application_firewall_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#id ApplicationLoadBalancerSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#tags ApplicationLoadBalancerSecurityPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts">ApplicationLoadBalancerSecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `application_load_balancer_id`<sup>Required</sup> <a name="application_load_balancer_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.applicationLoadBalancerId"></a>

```python
application_load_balancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#application_load_balancer_id ApplicationLoadBalancerSecurityPolicy#application_load_balancer_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#location ApplicationLoadBalancerSecurityPolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#name ApplicationLoadBalancerSecurityPolicy#name}.

---

##### `web_application_firewall_policy_id`<sup>Required</sup> <a name="web_application_firewall_policy_id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.webApplicationFirewallPolicyId"></a>

```python
web_application_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#web_application_firewall_policy_id ApplicationLoadBalancerSecurityPolicy#web_application_firewall_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#id ApplicationLoadBalancerSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#tags ApplicationLoadBalancerSecurityPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyConfig.property.timeouts"></a>

```python
timeouts: ApplicationLoadBalancerSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts">ApplicationLoadBalancerSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#timeouts ApplicationLoadBalancerSecurityPolicy#timeouts}

---

### ApplicationLoadBalancerSecurityPolicyTimeouts <a name="ApplicationLoadBalancerSecurityPolicyTimeouts" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_load_balancer_security_policy

applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#create ApplicationLoadBalancerSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#delete ApplicationLoadBalancerSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#read ApplicationLoadBalancerSecurityPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#update ApplicationLoadBalancerSecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#create ApplicationLoadBalancerSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#delete ApplicationLoadBalancerSecurityPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#read ApplicationLoadBalancerSecurityPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/application_load_balancer_security_policy#update ApplicationLoadBalancerSecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference <a name="ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import application_load_balancer_security_policy

applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts">ApplicationLoadBalancerSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationLoadBalancerSecurityPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.applicationLoadBalancerSecurityPolicy.ApplicationLoadBalancerSecurityPolicyTimeouts">ApplicationLoadBalancerSecurityPolicyTimeouts</a>

---




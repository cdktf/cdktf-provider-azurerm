# `azurerm_servicebus_namespace_network_rule_set`

Refer to the Terraform Registory for docs: [`azurerm_servicebus_namespace_network_rule_set`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set).

# `servicebusNamespaceNetworkRuleSet` Submodule <a name="`servicebusNamespaceNetworkRuleSet` Submodule" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceNetworkRuleSet <a name="ServicebusNamespaceNetworkRuleSet" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set azurerm_servicebus_namespace_network_rule_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace_id: str,
  default_action: str = None,
  id: str = None,
  ip_rules: typing.List[str] = None,
  network_rules: typing.Union[IResolvable, typing.List[ServicebusNamespaceNetworkRuleSetNetworkRules]] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: ServicebusNamespaceNetworkRuleSetTimeouts = None,
  trusted_services_allowed: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.ipRules">ip_rules</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.networkRules">network_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]]</code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.trustedServicesAllowed">trusted_services_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}.

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.ipRules"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}.

---

##### `network_rules`<sup>Optional</sup> <a name="network_rules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.networkRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]]

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#network_rules ServicebusNamespaceNetworkRuleSet#network_rules}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#timeouts ServicebusNamespaceNetworkRuleSet#timeouts}

---

##### `trusted_services_allowed`<sup>Optional</sup> <a name="trusted_services_allowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.Initializer.parameter.trustedServicesAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putNetworkRules">put_network_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetDefaultAction">reset_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetIpRules">reset_ip_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetNetworkRules">reset_network_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTrustedServicesAllowed">reset_trusted_services_allowed</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_network_rules` <a name="put_network_rules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putNetworkRules"></a>

```python
def put_network_rules(
  value: typing.Union[IResolvable, typing.List[ServicebusNamespaceNetworkRuleSetNetworkRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putNetworkRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#create ServicebusNamespaceNetworkRuleSet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#delete ServicebusNamespaceNetworkRuleSet#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#read ServicebusNamespaceNetworkRuleSet#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#update ServicebusNamespaceNetworkRuleSet#update}.

---

##### `reset_default_action` <a name="reset_default_action" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetDefaultAction"></a>

```python
def reset_default_action() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_rules` <a name="reset_ip_rules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetIpRules"></a>

```python
def reset_ip_rules() -> None
```

##### `reset_network_rules` <a name="reset_network_rules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetNetworkRules"></a>

```python
def reset_network_rules() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trusted_services_allowed` <a name="reset_trusted_services_allowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.resetTrustedServicesAllowed"></a>

```python
def reset_trusted_services_allowed() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRules">network_rules</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList">ServicebusNamespaceNetworkRuleSetNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference">ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRulesInput">ip_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRulesInput">network_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowedInput">trusted_services_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRules">ip_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowed">trusted_services_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_rules`<sup>Required</sup> <a name="network_rules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRules"></a>

```python
network_rules: ServicebusNamespaceNetworkRuleSetNetworkRulesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList">ServicebusNamespaceNetworkRuleSetNetworkRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeouts"></a>

```python
timeouts: ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference">ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference</a>

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_rules_input`<sup>Optional</sup> <a name="ip_rules_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRulesInput"></a>

```python
ip_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `network_rules_input`<sup>Optional</sup> <a name="network_rules_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.networkRulesInput"></a>

```python
network_rules_input: typing.Union[IResolvable, typing.List[ServicebusNamespaceNetworkRuleSetNetworkRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]]

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServicebusNamespaceNetworkRuleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>]

---

##### `trusted_services_allowed_input`<sup>Optional</sup> <a name="trusted_services_allowed_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowedInput"></a>

```python
trusted_services_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_rules`<sup>Required</sup> <a name="ip_rules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.ipRules"></a>

```python
ip_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `trusted_services_allowed`<sup>Required</sup> <a name="trusted_services_allowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.trustedServicesAllowed"></a>

```python
trusted_services_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceNetworkRuleSetConfig <a name="ServicebusNamespaceNetworkRuleSetConfig" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace_id: str,
  default_action: str = None,
  id: str = None,
  ip_rules: typing.List[str] = None,
  network_rules: typing.Union[IResolvable, typing.List[ServicebusNamespaceNetworkRuleSetNetworkRules]] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: ServicebusNamespaceNetworkRuleSetTimeouts = None,
  trusted_services_allowed: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.ipRules">ip_rules</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.networkRules">network_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]]</code> | network_rules block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.trustedServicesAllowed">trusted_services_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#namespace_id ServicebusNamespaceNetworkRuleSet#namespace_id}.

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#default_action ServicebusNamespaceNetworkRuleSet#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#id ServicebusNamespaceNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_rules`<sup>Optional</sup> <a name="ip_rules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.ipRules"></a>

```python
ip_rules: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#ip_rules ServicebusNamespaceNetworkRuleSet#ip_rules}.

---

##### `network_rules`<sup>Optional</sup> <a name="network_rules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.networkRules"></a>

```python
network_rules: typing.Union[IResolvable, typing.List[ServicebusNamespaceNetworkRuleSetNetworkRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]]

network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#network_rules ServicebusNamespaceNetworkRuleSet#network_rules}

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#public_network_access_enabled ServicebusNamespaceNetworkRuleSet#public_network_access_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.timeouts"></a>

```python
timeouts: ServicebusNamespaceNetworkRuleSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#timeouts ServicebusNamespaceNetworkRuleSet#timeouts}

---

##### `trusted_services_allowed`<sup>Optional</sup> <a name="trusted_services_allowed" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetConfig.property.trustedServicesAllowed"></a>

```python
trusted_services_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#trusted_services_allowed ServicebusNamespaceNetworkRuleSet#trusted_services_allowed}.

---

### ServicebusNamespaceNetworkRuleSetNetworkRules <a name="ServicebusNamespaceNetworkRuleSetNetworkRules" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules(
  subnet_id: str,
  ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#subnet_id ServicebusNamespaceNetworkRuleSet#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.ignoreMissingVnetServiceEndpoint">ignore_missing_vnet_service_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#ignore_missing_vnet_service_endpoint ServicebusNamespaceNetworkRuleSet#ignore_missing_vnet_service_endpoint}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#subnet_id ServicebusNamespaceNetworkRuleSet#subnet_id}.

---

##### `ignore_missing_vnet_service_endpoint`<sup>Optional</sup> <a name="ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules.property.ignoreMissingVnetServiceEndpoint"></a>

```python
ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#ignore_missing_vnet_service_endpoint ServicebusNamespaceNetworkRuleSet#ignore_missing_vnet_service_endpoint}.

---

### ServicebusNamespaceNetworkRuleSetTimeouts <a name="ServicebusNamespaceNetworkRuleSetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#create ServicebusNamespaceNetworkRuleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#delete ServicebusNamespaceNetworkRuleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#read ServicebusNamespaceNetworkRuleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#update ServicebusNamespaceNetworkRuleSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#create ServicebusNamespaceNetworkRuleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#delete ServicebusNamespaceNetworkRuleSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#read ServicebusNamespaceNetworkRuleSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/servicebus_namespace_network_rule_set#update ServicebusNamespaceNetworkRuleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceNetworkRuleSetNetworkRulesList <a name="ServicebusNamespaceNetworkRuleSetNetworkRulesList" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServicebusNamespaceNetworkRuleSetNetworkRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]]

---


### ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference <a name="ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint">reset_ignore_missing_vnet_service_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_missing_vnet_service_endpoint` <a name="reset_ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```python
def reset_ignore_missing_vnet_service_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput">ignore_missing_vnet_service_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">ignore_missing_vnet_service_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_missing_vnet_service_endpoint_input`<sup>Optional</sup> <a name="ignore_missing_vnet_service_endpoint_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```python
ignore_missing_vnet_service_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `ignore_missing_vnet_service_endpoint`<sup>Required</sup> <a name="ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```python
ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicebusNamespaceNetworkRuleSetNetworkRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetNetworkRules">ServicebusNamespaceNetworkRuleSetNetworkRules</a>]

---


### ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference <a name="ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_namespace_network_rule_set

servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicebusNamespaceNetworkRuleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusNamespaceNetworkRuleSet.ServicebusNamespaceNetworkRuleSetTimeouts">ServicebusNamespaceNetworkRuleSetTimeouts</a>]

---




# `privateDnsResolverDnsForwardingRuleset` Submodule <a name="`privateDnsResolverDnsForwardingRuleset` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverDnsForwardingRuleset <a name="PrivateDnsResolverDnsForwardingRuleset" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset azurerm_private_dns_resolver_dns_forwarding_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_dns_forwarding_ruleset

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset(
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
  private_dns_resolver_outbound_endpoint_ids: typing.List[str],
  resource_group_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsResolverDnsForwardingRulesetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.privateDnsResolverOutboundEndpointIds">private_dns_resolver_outbound_endpoint_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}.

---

##### `private_dns_resolver_outbound_endpoint_ids`<sup>Required</sup> <a name="private_dns_resolver_outbound_endpoint_ids" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.privateDnsResolverOutboundEndpointIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#timeouts PrivateDnsResolverDnsForwardingRuleset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#create PrivateDnsResolverDnsForwardingRuleset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#delete PrivateDnsResolverDnsForwardingRuleset#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#read PrivateDnsResolverDnsForwardingRuleset#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#update PrivateDnsResolverDnsForwardingRuleset#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivateDnsResolverDnsForwardingRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_dns_forwarding_ruleset

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_dns_forwarding_ruleset

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_dns_forwarding_ruleset

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_dns_forwarding_ruleset

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivateDnsResolverDnsForwardingRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivateDnsResolverDnsForwardingRuleset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivateDnsResolverDnsForwardingRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverDnsForwardingRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIdsInput">private_dns_resolver_outbound_endpoint_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds">private_dns_resolver_outbound_endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeouts"></a>

```python
timeouts: PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_dns_resolver_outbound_endpoint_ids_input`<sup>Optional</sup> <a name="private_dns_resolver_outbound_endpoint_ids_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIdsInput"></a>

```python
private_dns_resolver_outbound_endpoint_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrivateDnsResolverDnsForwardingRulesetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_dns_resolver_outbound_endpoint_ids`<sup>Required</sup> <a name="private_dns_resolver_outbound_endpoint_ids" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds"></a>

```python
private_dns_resolver_outbound_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverDnsForwardingRulesetConfig <a name="PrivateDnsResolverDnsForwardingRulesetConfig" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_dns_forwarding_ruleset

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  private_dns_resolver_outbound_endpoint_ids: typing.List[str],
  resource_group_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsResolverDnsForwardingRulesetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.privateDnsResolverOutboundEndpointIds">private_dns_resolver_outbound_endpoint_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}.

---

##### `private_dns_resolver_outbound_endpoint_ids`<sup>Required</sup> <a name="private_dns_resolver_outbound_endpoint_ids" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.privateDnsResolverOutboundEndpointIds"></a>

```python
private_dns_resolver_outbound_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts"></a>

```python
timeouts: PrivateDnsResolverDnsForwardingRulesetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#timeouts PrivateDnsResolverDnsForwardingRuleset#timeouts}

---

### PrivateDnsResolverDnsForwardingRulesetTimeouts <a name="PrivateDnsResolverDnsForwardingRulesetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_dns_forwarding_ruleset

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#create PrivateDnsResolverDnsForwardingRuleset#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#delete PrivateDnsResolverDnsForwardingRuleset#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#read PrivateDnsResolverDnsForwardingRuleset#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#update PrivateDnsResolverDnsForwardingRuleset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#create PrivateDnsResolverDnsForwardingRuleset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#delete PrivateDnsResolverDnsForwardingRuleset#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#read PrivateDnsResolverDnsForwardingRuleset#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#update PrivateDnsResolverDnsForwardingRuleset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference <a name="PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_dns_forwarding_ruleset

privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateDnsResolverDnsForwardingRulesetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>]

---




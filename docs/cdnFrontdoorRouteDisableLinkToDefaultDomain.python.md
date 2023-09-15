# `azurerm_cdn_frontdoor_route_disable_link_to_default_domain`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_route_disable_link_to_default_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain).

# `cdnFrontdoorRouteDisableLinkToDefaultDomain` Submodule <a name="`cdnFrontdoorRouteDisableLinkToDefaultDomain` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRouteDisableLinkToDefaultDomain <a name="CdnFrontdoorRouteDisableLinkToDefaultDomain" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain azurerm_cdn_frontdoor_route_disable_link_to_default_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_route_disable_link_to_default_domain

cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_custom_domain_ids: typing.List[str],
  cdn_frontdoor_route_id: str,
  id: str = None,
  timeouts: CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.cdnFrontdoorCustomDomainIds">cdn_frontdoor_custom_domain_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.cdnFrontdoorRouteId">cdn_frontdoor_route_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_custom_domain_ids`<sup>Required</sup> <a name="cdn_frontdoor_custom_domain_ids" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.cdnFrontdoorCustomDomainIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}.

---

##### `cdn_frontdoor_route_id`<sup>Required</sup> <a name="cdn_frontdoor_route_id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.cdnFrontdoorRouteId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#timeouts CdnFrontdoorRouteDisableLinkToDefaultDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#create CdnFrontdoorRouteDisableLinkToDefaultDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#delete CdnFrontdoorRouteDisableLinkToDefaultDomain#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#read CdnFrontdoorRouteDisableLinkToDefaultDomain#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#update CdnFrontdoorRouteDisableLinkToDefaultDomain#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_route_disable_link_to_default_domain

cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_route_disable_link_to_default_domain

cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_route_disable_link_to_default_domain

cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIdsInput">cdn_frontdoor_custom_domain_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteIdInput">cdn_frontdoor_route_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIds">cdn_frontdoor_custom_domain_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteId">cdn_frontdoor_route_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeouts"></a>

```python
timeouts: CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference</a>

---

##### `cdn_frontdoor_custom_domain_ids_input`<sup>Optional</sup> <a name="cdn_frontdoor_custom_domain_ids_input" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIdsInput"></a>

```python
cdn_frontdoor_custom_domain_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cdn_frontdoor_route_id_input`<sup>Optional</sup> <a name="cdn_frontdoor_route_id_input" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteIdInput"></a>

```python
cdn_frontdoor_route_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>]

---

##### `cdn_frontdoor_custom_domain_ids`<sup>Required</sup> <a name="cdn_frontdoor_custom_domain_ids" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIds"></a>

```python
cdn_frontdoor_custom_domain_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cdn_frontdoor_route_id`<sup>Required</sup> <a name="cdn_frontdoor_route_id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteId"></a>

```python
cdn_frontdoor_route_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRouteDisableLinkToDefaultDomainConfig <a name="CdnFrontdoorRouteDisableLinkToDefaultDomainConfig" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_route_disable_link_to_default_domain

cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cdn_frontdoor_custom_domain_ids: typing.List[str],
  cdn_frontdoor_route_id: str,
  id: str = None,
  timeouts: CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorCustomDomainIds">cdn_frontdoor_custom_domain_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorRouteId">cdn_frontdoor_route_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_frontdoor_custom_domain_ids`<sup>Required</sup> <a name="cdn_frontdoor_custom_domain_ids" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorCustomDomainIds"></a>

```python
cdn_frontdoor_custom_domain_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}.

---

##### `cdn_frontdoor_route_id`<sup>Required</sup> <a name="cdn_frontdoor_route_id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorRouteId"></a>

```python
cdn_frontdoor_route_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.timeouts"></a>

```python
timeouts: CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#timeouts CdnFrontdoorRouteDisableLinkToDefaultDomain#timeouts}

---

### CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts <a name="CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_route_disable_link_to_default_domain

cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#create CdnFrontdoorRouteDisableLinkToDefaultDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#delete CdnFrontdoorRouteDisableLinkToDefaultDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#read CdnFrontdoorRouteDisableLinkToDefaultDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#update CdnFrontdoorRouteDisableLinkToDefaultDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#create CdnFrontdoorRouteDisableLinkToDefaultDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#delete CdnFrontdoorRouteDisableLinkToDefaultDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#read CdnFrontdoorRouteDisableLinkToDefaultDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#update CdnFrontdoorRouteDisableLinkToDefaultDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference <a name="CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cdn_frontdoor_route_disable_link_to_default_domain

cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>]

---




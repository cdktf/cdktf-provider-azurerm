# `azurerm_cdn_frontdoor_route`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_route`](https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route).

# `cdnFrontdoorRoute` Submodule <a name="`cdnFrontdoorRoute` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRoute <a name="CdnFrontdoorRoute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route azurerm_cdn_frontdoor_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cdnfrontdoorroute"

cdnfrontdoorroute.NewCdnFrontdoorRoute(scope Construct, id *string, config CdnFrontdoorRouteConfig) CdnFrontdoorRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig">CdnFrontdoorRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig">CdnFrontdoorRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putCache">PutCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCache">ResetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorCustomDomainIds">ResetCdnFrontdoorCustomDomainIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorOriginPath">ResetCdnFrontdoorOriginPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorRuleSetIds">ResetCdnFrontdoorRuleSetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetForwardingProtocol">ResetForwardingProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetHttpsRedirectEnabled">ResetHttpsRedirectEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetLinkToDefaultDomain">ResetLinkToDefaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCache` <a name="PutCache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putCache"></a>

```go
func PutCache(value CdnFrontdoorRouteCache)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putCache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putTimeouts"></a>

```go
func PutTimeouts(value CdnFrontdoorRouteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

---

##### `ResetCache` <a name="ResetCache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCache"></a>

```go
func ResetCache()
```

##### `ResetCdnFrontdoorCustomDomainIds` <a name="ResetCdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorCustomDomainIds"></a>

```go
func ResetCdnFrontdoorCustomDomainIds()
```

##### `ResetCdnFrontdoorOriginPath` <a name="ResetCdnFrontdoorOriginPath" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorOriginPath"></a>

```go
func ResetCdnFrontdoorOriginPath()
```

##### `ResetCdnFrontdoorRuleSetIds` <a name="ResetCdnFrontdoorRuleSetIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorRuleSetIds"></a>

```go
func ResetCdnFrontdoorRuleSetIds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetForwardingProtocol` <a name="ResetForwardingProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetForwardingProtocol"></a>

```go
func ResetForwardingProtocol()
```

##### `ResetHttpsRedirectEnabled` <a name="ResetHttpsRedirectEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetHttpsRedirectEnabled"></a>

```go
func ResetHttpsRedirectEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetId"></a>

```go
func ResetId()
```

##### `ResetLinkToDefaultDomain` <a name="ResetLinkToDefaultDomain" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetLinkToDefaultDomain"></a>

```go
func ResetLinkToDefaultDomain()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cdnfrontdoorroute"

cdnfrontdoorroute.CdnFrontdoorRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cdnfrontdoorroute"

cdnfrontdoorroute.CdnFrontdoorRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cdnfrontdoorroute"

cdnfrontdoorroute.CdnFrontdoorRoute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cache">Cache</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference">CdnFrontdoorRouteCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference">CdnFrontdoorRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cacheInput">CacheInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIdsInput">CdnFrontdoorCustomDomainIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointIdInput">CdnFrontdoorEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupIdInput">CdnFrontdoorOriginGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIdsInput">CdnFrontdoorOriginIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPathInput">CdnFrontdoorOriginPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIdsInput">CdnFrontdoorRuleSetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocolInput">ForwardingProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabledInput">HttpsRedirectEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomainInput">LinkToDefaultDomainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatchInput">PatternsToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocolsInput">SupportedProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIds">CdnFrontdoorCustomDomainIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointId">CdnFrontdoorEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIds">CdnFrontdoorOriginIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPath">CdnFrontdoorOriginPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIds">CdnFrontdoorRuleSetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabled">HttpsRedirectEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomain">LinkToDefaultDomain</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatch">PatternsToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocols">SupportedProtocols</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cache"></a>

```go
func Cache() CdnFrontdoorRouteCacheOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference">CdnFrontdoorRouteCacheOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeouts"></a>

```go
func Timeouts() CdnFrontdoorRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference">CdnFrontdoorRouteTimeoutsOutputReference</a>

---

##### `CacheInput`<sup>Optional</sup> <a name="CacheInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cacheInput"></a>

```go
func CacheInput() CdnFrontdoorRouteCache
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

---

##### `CdnFrontdoorCustomDomainIdsInput`<sup>Optional</sup> <a name="CdnFrontdoorCustomDomainIdsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIdsInput"></a>

```go
func CdnFrontdoorCustomDomainIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CdnFrontdoorEndpointIdInput`<sup>Optional</sup> <a name="CdnFrontdoorEndpointIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointIdInput"></a>

```go
func CdnFrontdoorEndpointIdInput() *string
```

- *Type:* *string

---

##### `CdnFrontdoorOriginGroupIdInput`<sup>Optional</sup> <a name="CdnFrontdoorOriginGroupIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupIdInput"></a>

```go
func CdnFrontdoorOriginGroupIdInput() *string
```

- *Type:* *string

---

##### `CdnFrontdoorOriginIdsInput`<sup>Optional</sup> <a name="CdnFrontdoorOriginIdsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIdsInput"></a>

```go
func CdnFrontdoorOriginIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CdnFrontdoorOriginPathInput`<sup>Optional</sup> <a name="CdnFrontdoorOriginPathInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPathInput"></a>

```go
func CdnFrontdoorOriginPathInput() *string
```

- *Type:* *string

---

##### `CdnFrontdoorRuleSetIdsInput`<sup>Optional</sup> <a name="CdnFrontdoorRuleSetIdsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIdsInput"></a>

```go
func CdnFrontdoorRuleSetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardingProtocolInput`<sup>Optional</sup> <a name="ForwardingProtocolInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocolInput"></a>

```go
func ForwardingProtocolInput() *string
```

- *Type:* *string

---

##### `HttpsRedirectEnabledInput`<sup>Optional</sup> <a name="HttpsRedirectEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabledInput"></a>

```go
func HttpsRedirectEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LinkToDefaultDomainInput`<sup>Optional</sup> <a name="LinkToDefaultDomainInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomainInput"></a>

```go
func LinkToDefaultDomainInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PatternsToMatchInput`<sup>Optional</sup> <a name="PatternsToMatchInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatchInput"></a>

```go
func PatternsToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedProtocolsInput`<sup>Optional</sup> <a name="SupportedProtocolsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocolsInput"></a>

```go
func SupportedProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CdnFrontdoorCustomDomainIds`<sup>Required</sup> <a name="CdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIds"></a>

```go
func CdnFrontdoorCustomDomainIds() *[]*string
```

- *Type:* *[]*string

---

##### `CdnFrontdoorEndpointId`<sup>Required</sup> <a name="CdnFrontdoorEndpointId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointId"></a>

```go
func CdnFrontdoorEndpointId() *string
```

- *Type:* *string

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupId"></a>

```go
func CdnFrontdoorOriginGroupId() *string
```

- *Type:* *string

---

##### `CdnFrontdoorOriginIds`<sup>Required</sup> <a name="CdnFrontdoorOriginIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIds"></a>

```go
func CdnFrontdoorOriginIds() *[]*string
```

- *Type:* *[]*string

---

##### `CdnFrontdoorOriginPath`<sup>Required</sup> <a name="CdnFrontdoorOriginPath" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPath"></a>

```go
func CdnFrontdoorOriginPath() *string
```

- *Type:* *string

---

##### `CdnFrontdoorRuleSetIds`<sup>Required</sup> <a name="CdnFrontdoorRuleSetIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIds"></a>

```go
func CdnFrontdoorRuleSetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ForwardingProtocol`<sup>Required</sup> <a name="ForwardingProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocol"></a>

```go
func ForwardingProtocol() *string
```

- *Type:* *string

---

##### `HttpsRedirectEnabled`<sup>Required</sup> <a name="HttpsRedirectEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabled"></a>

```go
func HttpsRedirectEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkToDefaultDomain`<sup>Required</sup> <a name="LinkToDefaultDomain" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomain"></a>

```go
func LinkToDefaultDomain() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PatternsToMatch`<sup>Required</sup> <a name="PatternsToMatch" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatch"></a>

```go
func PatternsToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedProtocols`<sup>Required</sup> <a name="SupportedProtocols" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocols"></a>

```go
func SupportedProtocols() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRouteCache <a name="CdnFrontdoorRouteCache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cdnfrontdoorroute"

&cdnfrontdoorroute.CdnFrontdoorRouteCache {
	CompressionEnabled: interface{},
	ContentTypesToCompress: *[]*string,
	QueryStringCachingBehavior: *string,
	QueryStrings: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.compressionEnabled">CompressionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#compression_enabled CdnFrontdoorRoute#compression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.contentTypesToCompress">ContentTypesToCompress</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#content_types_to_compress CdnFrontdoorRoute#content_types_to_compress}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStringCachingBehavior">QueryStringCachingBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#query_string_caching_behavior CdnFrontdoorRoute#query_string_caching_behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStrings">QueryStrings</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#query_strings CdnFrontdoorRoute#query_strings}. |

---

##### `CompressionEnabled`<sup>Optional</sup> <a name="CompressionEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.compressionEnabled"></a>

```go
CompressionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#compression_enabled CdnFrontdoorRoute#compression_enabled}.

---

##### `ContentTypesToCompress`<sup>Optional</sup> <a name="ContentTypesToCompress" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.contentTypesToCompress"></a>

```go
ContentTypesToCompress *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#content_types_to_compress CdnFrontdoorRoute#content_types_to_compress}.

---

##### `QueryStringCachingBehavior`<sup>Optional</sup> <a name="QueryStringCachingBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStringCachingBehavior"></a>

```go
QueryStringCachingBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#query_string_caching_behavior CdnFrontdoorRoute#query_string_caching_behavior}.

---

##### `QueryStrings`<sup>Optional</sup> <a name="QueryStrings" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStrings"></a>

```go
QueryStrings *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#query_strings CdnFrontdoorRoute#query_strings}.

---

### CdnFrontdoorRouteConfig <a name="CdnFrontdoorRouteConfig" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cdnfrontdoorroute"

&cdnfrontdoorroute.CdnFrontdoorRouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CdnFrontdoorEndpointId: *string,
	CdnFrontdoorOriginGroupId: *string,
	CdnFrontdoorOriginIds: *[]*string,
	Name: *string,
	PatternsToMatch: *[]*string,
	SupportedProtocols: *[]*string,
	Cache: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cdnFrontdoorRoute.CdnFrontdoorRouteCache,
	CdnFrontdoorCustomDomainIds: *[]*string,
	CdnFrontdoorOriginPath: *string,
	CdnFrontdoorRuleSetIds: *[]*string,
	Enabled: interface{},
	ForwardingProtocol: *string,
	HttpsRedirectEnabled: interface{},
	Id: *string,
	LinkToDefaultDomain: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorEndpointId">CdnFrontdoorEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_endpoint_id CdnFrontdoorRoute#cdn_frontdoor_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_group_id CdnFrontdoorRoute#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginIds">CdnFrontdoorOriginIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_ids CdnFrontdoorRoute#cdn_frontdoor_origin_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#name CdnFrontdoorRoute#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.patternsToMatch">PatternsToMatch</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#patterns_to_match CdnFrontdoorRoute#patterns_to_match}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.supportedProtocols">SupportedProtocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#supported_protocols CdnFrontdoorRoute#supported_protocols}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cache">Cache</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a></code> | cache block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorCustomDomainIds">CdnFrontdoorCustomDomainIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_custom_domain_ids CdnFrontdoorRoute#cdn_frontdoor_custom_domain_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginPath">CdnFrontdoorOriginPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_path CdnFrontdoorRoute#cdn_frontdoor_origin_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorRuleSetIds">CdnFrontdoorRuleSetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_rule_set_ids CdnFrontdoorRoute#cdn_frontdoor_rule_set_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#enabled CdnFrontdoorRoute#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#forwarding_protocol CdnFrontdoorRoute#forwarding_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.httpsRedirectEnabled">HttpsRedirectEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#https_redirect_enabled CdnFrontdoorRoute#https_redirect_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#id CdnFrontdoorRoute#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.linkToDefaultDomain">LinkToDefaultDomain</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#link_to_default_domain CdnFrontdoorRoute#link_to_default_domain}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CdnFrontdoorEndpointId`<sup>Required</sup> <a name="CdnFrontdoorEndpointId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorEndpointId"></a>

```go
CdnFrontdoorEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_endpoint_id CdnFrontdoorRoute#cdn_frontdoor_endpoint_id}.

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginGroupId"></a>

```go
CdnFrontdoorOriginGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_group_id CdnFrontdoorRoute#cdn_frontdoor_origin_group_id}.

---

##### `CdnFrontdoorOriginIds`<sup>Required</sup> <a name="CdnFrontdoorOriginIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginIds"></a>

```go
CdnFrontdoorOriginIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_ids CdnFrontdoorRoute#cdn_frontdoor_origin_ids}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#name CdnFrontdoorRoute#name}.

---

##### `PatternsToMatch`<sup>Required</sup> <a name="PatternsToMatch" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.patternsToMatch"></a>

```go
PatternsToMatch *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#patterns_to_match CdnFrontdoorRoute#patterns_to_match}.

---

##### `SupportedProtocols`<sup>Required</sup> <a name="SupportedProtocols" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.supportedProtocols"></a>

```go
SupportedProtocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#supported_protocols CdnFrontdoorRoute#supported_protocols}.

---

##### `Cache`<sup>Optional</sup> <a name="Cache" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cache"></a>

```go
Cache CdnFrontdoorRouteCache
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cache CdnFrontdoorRoute#cache}

---

##### `CdnFrontdoorCustomDomainIds`<sup>Optional</sup> <a name="CdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorCustomDomainIds"></a>

```go
CdnFrontdoorCustomDomainIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_custom_domain_ids CdnFrontdoorRoute#cdn_frontdoor_custom_domain_ids}.

---

##### `CdnFrontdoorOriginPath`<sup>Optional</sup> <a name="CdnFrontdoorOriginPath" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginPath"></a>

```go
CdnFrontdoorOriginPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_path CdnFrontdoorRoute#cdn_frontdoor_origin_path}.

---

##### `CdnFrontdoorRuleSetIds`<sup>Optional</sup> <a name="CdnFrontdoorRuleSetIds" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorRuleSetIds"></a>

```go
CdnFrontdoorRuleSetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_rule_set_ids CdnFrontdoorRoute#cdn_frontdoor_rule_set_ids}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#enabled CdnFrontdoorRoute#enabled}.

---

##### `ForwardingProtocol`<sup>Optional</sup> <a name="ForwardingProtocol" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forwardingProtocol"></a>

```go
ForwardingProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#forwarding_protocol CdnFrontdoorRoute#forwarding_protocol}.

---

##### `HttpsRedirectEnabled`<sup>Optional</sup> <a name="HttpsRedirectEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.httpsRedirectEnabled"></a>

```go
HttpsRedirectEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#https_redirect_enabled CdnFrontdoorRoute#https_redirect_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#id CdnFrontdoorRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkToDefaultDomain`<sup>Optional</sup> <a name="LinkToDefaultDomain" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.linkToDefaultDomain"></a>

```go
LinkToDefaultDomain interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#link_to_default_domain CdnFrontdoorRoute#link_to_default_domain}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.timeouts"></a>

```go
Timeouts CdnFrontdoorRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#timeouts CdnFrontdoorRoute#timeouts}

---

### CdnFrontdoorRouteTimeouts <a name="CdnFrontdoorRouteTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cdnfrontdoorroute"

&cdnfrontdoorroute.CdnFrontdoorRouteTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#create CdnFrontdoorRoute#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#delete CdnFrontdoorRoute#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#read CdnFrontdoorRoute#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#update CdnFrontdoorRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#create CdnFrontdoorRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#delete CdnFrontdoorRoute#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#read CdnFrontdoorRoute#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.56.0/docs/resources/cdn_frontdoor_route#update CdnFrontdoorRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRouteCacheOutputReference <a name="CdnFrontdoorRouteCacheOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cdnfrontdoorroute"

cdnfrontdoorroute.NewCdnFrontdoorRouteCacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRouteCacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetCompressionEnabled">ResetCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetContentTypesToCompress">ResetContentTypesToCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStringCachingBehavior">ResetQueryStringCachingBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStrings">ResetQueryStrings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompressionEnabled` <a name="ResetCompressionEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetCompressionEnabled"></a>

```go
func ResetCompressionEnabled()
```

##### `ResetContentTypesToCompress` <a name="ResetContentTypesToCompress" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetContentTypesToCompress"></a>

```go
func ResetContentTypesToCompress()
```

##### `ResetQueryStringCachingBehavior` <a name="ResetQueryStringCachingBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStringCachingBehavior"></a>

```go
func ResetQueryStringCachingBehavior()
```

##### `ResetQueryStrings` <a name="ResetQueryStrings" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStrings"></a>

```go
func ResetQueryStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabledInput">CompressionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompressInput">ContentTypesToCompressInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehaviorInput">QueryStringCachingBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringsInput">QueryStringsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabled">CompressionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompress">ContentTypesToCompress</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehavior">QueryStringCachingBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStrings">QueryStrings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionEnabledInput`<sup>Optional</sup> <a name="CompressionEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabledInput"></a>

```go
func CompressionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ContentTypesToCompressInput`<sup>Optional</sup> <a name="ContentTypesToCompressInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompressInput"></a>

```go
func ContentTypesToCompressInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringCachingBehaviorInput`<sup>Optional</sup> <a name="QueryStringCachingBehaviorInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehaviorInput"></a>

```go
func QueryStringCachingBehaviorInput() *string
```

- *Type:* *string

---

##### `QueryStringsInput`<sup>Optional</sup> <a name="QueryStringsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringsInput"></a>

```go
func QueryStringsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompressionEnabled`<sup>Required</sup> <a name="CompressionEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabled"></a>

```go
func CompressionEnabled() interface{}
```

- *Type:* interface{}

---

##### `ContentTypesToCompress`<sup>Required</sup> <a name="ContentTypesToCompress" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompress"></a>

```go
func ContentTypesToCompress() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringCachingBehavior`<sup>Required</sup> <a name="QueryStringCachingBehavior" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehavior"></a>

```go
func QueryStringCachingBehavior() *string
```

- *Type:* *string

---

##### `QueryStrings`<sup>Required</sup> <a name="QueryStrings" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStrings"></a>

```go
func QueryStrings() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorRouteCache
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

---


### CdnFrontdoorRouteTimeoutsOutputReference <a name="CdnFrontdoorRouteTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/cdnfrontdoorroute"

cdnfrontdoorroute.NewCdnFrontdoorRouteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRouteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




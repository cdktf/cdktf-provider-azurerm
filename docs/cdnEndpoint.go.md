# `azurerm_cdn_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_cdn_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint).

# `cdnEndpoint` Submodule <a name="`cdnEndpoint` Submodule" id="@cdktf/provider-azurerm.cdnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnEndpoint <a name="CdnEndpoint" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint azurerm_cdn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpoint(scope Construct, id *string, config CdnEndpointConfig) CdnEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig">CdnEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig">CdnEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putDeliveryRule">PutDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGeoFilter">PutGeoFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGlobalDeliveryRule">PutGlobalDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putOrigin">PutOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetContentTypesToCompress">ResetContentTypesToCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetDeliveryRule">ResetDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGeoFilter">ResetGeoFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGlobalDeliveryRule">ResetGlobalDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsCompressionEnabled">ResetIsCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpAllowed">ResetIsHttpAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpsAllowed">ResetIsHttpsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOptimizationType">ResetOptimizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginHostHeader">ResetOriginHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginPath">ResetOriginPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetProbePath">ResetProbePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetQuerystringCachingBehaviour">ResetQuerystringCachingBehaviour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDeliveryRule` <a name="PutDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putDeliveryRule"></a>

```go
func PutDeliveryRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putDeliveryRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGeoFilter` <a name="PutGeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGeoFilter"></a>

```go
func PutGeoFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGeoFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGlobalDeliveryRule` <a name="PutGlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGlobalDeliveryRule"></a>

```go
func PutGlobalDeliveryRule(value CdnEndpointGlobalDeliveryRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGlobalDeliveryRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

---

##### `PutOrigin` <a name="PutOrigin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putOrigin"></a>

```go
func PutOrigin(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putOrigin.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value CdnEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

---

##### `ResetContentTypesToCompress` <a name="ResetContentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetContentTypesToCompress"></a>

```go
func ResetContentTypesToCompress()
```

##### `ResetDeliveryRule` <a name="ResetDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetDeliveryRule"></a>

```go
func ResetDeliveryRule()
```

##### `ResetGeoFilter` <a name="ResetGeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGeoFilter"></a>

```go
func ResetGeoFilter()
```

##### `ResetGlobalDeliveryRule` <a name="ResetGlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGlobalDeliveryRule"></a>

```go
func ResetGlobalDeliveryRule()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCompressionEnabled` <a name="ResetIsCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsCompressionEnabled"></a>

```go
func ResetIsCompressionEnabled()
```

##### `ResetIsHttpAllowed` <a name="ResetIsHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpAllowed"></a>

```go
func ResetIsHttpAllowed()
```

##### `ResetIsHttpsAllowed` <a name="ResetIsHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpsAllowed"></a>

```go
func ResetIsHttpsAllowed()
```

##### `ResetOptimizationType` <a name="ResetOptimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOptimizationType"></a>

```go
func ResetOptimizationType()
```

##### `ResetOriginHostHeader` <a name="ResetOriginHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginHostHeader"></a>

```go
func ResetOriginHostHeader()
```

##### `ResetOriginPath` <a name="ResetOriginPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginPath"></a>

```go
func ResetOriginPath()
```

##### `ResetProbePath` <a name="ResetProbePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetProbePath"></a>

```go
func ResetProbePath()
```

##### `ResetQuerystringCachingBehaviour` <a name="ResetQuerystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetQuerystringCachingBehaviour"></a>

```go
func ResetQuerystringCachingBehaviour()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.CdnEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.CdnEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.CdnEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRule">DeliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList">CdnEndpointDeliveryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilter">GeoFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList">CdnEndpointGeoFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRule">GlobalDeliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference">CdnEndpointGlobalDeliveryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList">CdnEndpointOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference">CdnEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompressInput">ContentTypesToCompressInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRuleInput">DeliveryRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilterInput">GeoFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRuleInput">GlobalDeliveryRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabledInput">IsCompressionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowedInput">IsHttpAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowedInput">IsHttpsAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationTypeInput">OptimizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeaderInput">OriginHostHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originInput">OriginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPathInput">OriginPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePathInput">ProbePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviourInput">QuerystringCachingBehaviourInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompress">ContentTypesToCompress</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabled">IsCompressionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowed">IsHttpAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowed">IsHttpsAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationType">OptimizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeader">OriginHostHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPath">OriginPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePath">ProbePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviour">QuerystringCachingBehaviour</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeliveryRule`<sup>Required</sup> <a name="DeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRule"></a>

```go
func DeliveryRule() CdnEndpointDeliveryRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList">CdnEndpointDeliveryRuleList</a>

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `GeoFilter`<sup>Required</sup> <a name="GeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilter"></a>

```go
func GeoFilter() CdnEndpointGeoFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList">CdnEndpointGeoFilterList</a>

---

##### `GlobalDeliveryRule`<sup>Required</sup> <a name="GlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRule"></a>

```go
func GlobalDeliveryRule() CdnEndpointGlobalDeliveryRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference">CdnEndpointGlobalDeliveryRuleOutputReference</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.origin"></a>

```go
func Origin() CdnEndpointOriginList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList">CdnEndpointOriginList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeouts"></a>

```go
func Timeouts() CdnEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference">CdnEndpointTimeoutsOutputReference</a>

---

##### `ContentTypesToCompressInput`<sup>Optional</sup> <a name="ContentTypesToCompressInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompressInput"></a>

```go
func ContentTypesToCompressInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeliveryRuleInput`<sup>Optional</sup> <a name="DeliveryRuleInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRuleInput"></a>

```go
func DeliveryRuleInput() interface{}
```

- *Type:* interface{}

---

##### `GeoFilterInput`<sup>Optional</sup> <a name="GeoFilterInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilterInput"></a>

```go
func GeoFilterInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalDeliveryRuleInput`<sup>Optional</sup> <a name="GlobalDeliveryRuleInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRuleInput"></a>

```go
func GlobalDeliveryRuleInput() CdnEndpointGlobalDeliveryRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsCompressionEnabledInput`<sup>Optional</sup> <a name="IsCompressionEnabledInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabledInput"></a>

```go
func IsCompressionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHttpAllowedInput`<sup>Optional</sup> <a name="IsHttpAllowedInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowedInput"></a>

```go
func IsHttpAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `IsHttpsAllowedInput`<sup>Optional</sup> <a name="IsHttpsAllowedInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowedInput"></a>

```go
func IsHttpsAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptimizationTypeInput`<sup>Optional</sup> <a name="OptimizationTypeInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationTypeInput"></a>

```go
func OptimizationTypeInput() *string
```

- *Type:* *string

---

##### `OriginHostHeaderInput`<sup>Optional</sup> <a name="OriginHostHeaderInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeaderInput"></a>

```go
func OriginHostHeaderInput() *string
```

- *Type:* *string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originInput"></a>

```go
func OriginInput() interface{}
```

- *Type:* interface{}

---

##### `OriginPathInput`<sup>Optional</sup> <a name="OriginPathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPathInput"></a>

```go
func OriginPathInput() *string
```

- *Type:* *string

---

##### `ProbePathInput`<sup>Optional</sup> <a name="ProbePathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePathInput"></a>

```go
func ProbePathInput() *string
```

- *Type:* *string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `QuerystringCachingBehaviourInput`<sup>Optional</sup> <a name="QuerystringCachingBehaviourInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviourInput"></a>

```go
func QuerystringCachingBehaviourInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContentTypesToCompress`<sup>Required</sup> <a name="ContentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompress"></a>

```go
func ContentTypesToCompress() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCompressionEnabled`<sup>Required</sup> <a name="IsCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabled"></a>

```go
func IsCompressionEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHttpAllowed`<sup>Required</sup> <a name="IsHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowed"></a>

```go
func IsHttpAllowed() interface{}
```

- *Type:* interface{}

---

##### `IsHttpsAllowed`<sup>Required</sup> <a name="IsHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowed"></a>

```go
func IsHttpsAllowed() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OptimizationType`<sup>Required</sup> <a name="OptimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationType"></a>

```go
func OptimizationType() *string
```

- *Type:* *string

---

##### `OriginHostHeader`<sup>Required</sup> <a name="OriginHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeader"></a>

```go
func OriginHostHeader() *string
```

- *Type:* *string

---

##### `OriginPath`<sup>Required</sup> <a name="OriginPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPath"></a>

```go
func OriginPath() *string
```

- *Type:* *string

---

##### `ProbePath`<sup>Required</sup> <a name="ProbePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePath"></a>

```go
func ProbePath() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `QuerystringCachingBehaviour`<sup>Required</sup> <a name="QuerystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviour"></a>

```go
func QuerystringCachingBehaviour() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnEndpointConfig <a name="CdnEndpointConfig" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Origin: interface{},
	ProfileName: *string,
	ResourceGroupName: *string,
	ContentTypesToCompress: *[]*string,
	DeliveryRule: interface{},
	GeoFilter: interface{},
	GlobalDeliveryRule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule,
	Id: *string,
	IsCompressionEnabled: interface{},
	IsHttpAllowed: interface{},
	IsHttpsAllowed: interface{},
	OptimizationType: *string,
	OriginHostHeader: *string,
	OriginPath: *string,
	ProbePath: *string,
	QuerystringCachingBehaviour: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#location CdnEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.origin">Origin</a></code> | <code>interface{}</code> | origin block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.profileName">ProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#profile_name CdnEndpoint#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#resource_group_name CdnEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.contentTypesToCompress">ContentTypesToCompress</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#content_types_to_compress CdnEndpoint#content_types_to_compress}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.deliveryRule">DeliveryRule</a></code> | <code>interface{}</code> | delivery_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.geoFilter">GeoFilter</a></code> | <code>interface{}</code> | geo_filter block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.globalDeliveryRule">GlobalDeliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | global_delivery_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#id CdnEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isCompressionEnabled">IsCompressionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#is_compression_enabled CdnEndpoint#is_compression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpAllowed">IsHttpAllowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#is_http_allowed CdnEndpoint#is_http_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpsAllowed">IsHttpsAllowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#is_https_allowed CdnEndpoint#is_https_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.optimizationType">OptimizationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#optimization_type CdnEndpoint#optimization_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originHostHeader">OriginHostHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#origin_host_header CdnEndpoint#origin_host_header}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originPath">OriginPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#origin_path CdnEndpoint#origin_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.probePath">ProbePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#probe_path CdnEndpoint#probe_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.querystringCachingBehaviour">QuerystringCachingBehaviour</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#querystring_caching_behaviour CdnEndpoint#querystring_caching_behaviour}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#tags CdnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#location CdnEndpoint#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.origin"></a>

```go
Origin interface{}
```

- *Type:* interface{}

origin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#origin CdnEndpoint#origin}

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#profile_name CdnEndpoint#profile_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#resource_group_name CdnEndpoint#resource_group_name}.

---

##### `ContentTypesToCompress`<sup>Optional</sup> <a name="ContentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.contentTypesToCompress"></a>

```go
ContentTypesToCompress *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#content_types_to_compress CdnEndpoint#content_types_to_compress}.

---

##### `DeliveryRule`<sup>Optional</sup> <a name="DeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.deliveryRule"></a>

```go
DeliveryRule interface{}
```

- *Type:* interface{}

delivery_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#delivery_rule CdnEndpoint#delivery_rule}

---

##### `GeoFilter`<sup>Optional</sup> <a name="GeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.geoFilter"></a>

```go
GeoFilter interface{}
```

- *Type:* interface{}

geo_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#geo_filter CdnEndpoint#geo_filter}

---

##### `GlobalDeliveryRule`<sup>Optional</sup> <a name="GlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.globalDeliveryRule"></a>

```go
GlobalDeliveryRule CdnEndpointGlobalDeliveryRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

global_delivery_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#global_delivery_rule CdnEndpoint#global_delivery_rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#id CdnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCompressionEnabled`<sup>Optional</sup> <a name="IsCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isCompressionEnabled"></a>

```go
IsCompressionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#is_compression_enabled CdnEndpoint#is_compression_enabled}.

---

##### `IsHttpAllowed`<sup>Optional</sup> <a name="IsHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpAllowed"></a>

```go
IsHttpAllowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#is_http_allowed CdnEndpoint#is_http_allowed}.

---

##### `IsHttpsAllowed`<sup>Optional</sup> <a name="IsHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpsAllowed"></a>

```go
IsHttpsAllowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#is_https_allowed CdnEndpoint#is_https_allowed}.

---

##### `OptimizationType`<sup>Optional</sup> <a name="OptimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.optimizationType"></a>

```go
OptimizationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#optimization_type CdnEndpoint#optimization_type}.

---

##### `OriginHostHeader`<sup>Optional</sup> <a name="OriginHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originHostHeader"></a>

```go
OriginHostHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#origin_host_header CdnEndpoint#origin_host_header}.

---

##### `OriginPath`<sup>Optional</sup> <a name="OriginPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originPath"></a>

```go
OriginPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#origin_path CdnEndpoint#origin_path}.

---

##### `ProbePath`<sup>Optional</sup> <a name="ProbePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.probePath"></a>

```go
ProbePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#probe_path CdnEndpoint#probe_path}.

---

##### `QuerystringCachingBehaviour`<sup>Optional</sup> <a name="QuerystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.querystringCachingBehaviour"></a>

```go
QuerystringCachingBehaviour *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#querystring_caching_behaviour CdnEndpoint#querystring_caching_behaviour}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#tags CdnEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.timeouts"></a>

```go
Timeouts CdnEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#timeouts CdnEndpoint#timeouts}

---

### CdnEndpointDeliveryRule <a name="CdnEndpointDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRule {
	Name: *string,
	Order: *f64,
	CacheExpirationAction: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction,
	CacheKeyQueryStringAction: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction,
	CookiesCondition: interface{},
	DeviceCondition: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition,
	HttpVersionCondition: interface{},
	ModifyRequestHeaderAction: interface{},
	ModifyResponseHeaderAction: interface{},
	PostArgCondition: interface{},
	QueryStringCondition: interface{},
	RemoteAddressCondition: interface{},
	RequestBodyCondition: interface{},
	RequestHeaderCondition: interface{},
	RequestMethodCondition: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition,
	RequestSchemeCondition: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition,
	RequestUriCondition: interface{},
	UrlFileExtensionCondition: interface{},
	UrlFileNameCondition: interface{},
	UrlPathCondition: interface{},
	UrlRedirectAction: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction,
	UrlRewriteAction: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#order CdnEndpoint#order}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheExpirationAction">CacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a></code> | cache_expiration_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheKeyQueryStringAction">CacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a></code> | cache_key_query_string_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cookiesCondition">CookiesCondition</a></code> | <code>interface{}</code> | cookies_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.deviceCondition">DeviceCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a></code> | device_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.httpVersionCondition">HttpVersionCondition</a></code> | <code>interface{}</code> | http_version_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyRequestHeaderAction">ModifyRequestHeaderAction</a></code> | <code>interface{}</code> | modify_request_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyResponseHeaderAction">ModifyResponseHeaderAction</a></code> | <code>interface{}</code> | modify_response_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.postArgCondition">PostArgCondition</a></code> | <code>interface{}</code> | post_arg_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.queryStringCondition">QueryStringCondition</a></code> | <code>interface{}</code> | query_string_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.remoteAddressCondition">RemoteAddressCondition</a></code> | <code>interface{}</code> | remote_address_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestBodyCondition">RequestBodyCondition</a></code> | <code>interface{}</code> | request_body_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestHeaderCondition">RequestHeaderCondition</a></code> | <code>interface{}</code> | request_header_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestMethodCondition">RequestMethodCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a></code> | request_method_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestSchemeCondition">RequestSchemeCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a></code> | request_scheme_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestUriCondition">RequestUriCondition</a></code> | <code>interface{}</code> | request_uri_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileExtensionCondition">UrlFileExtensionCondition</a></code> | <code>interface{}</code> | url_file_extension_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileNameCondition">UrlFileNameCondition</a></code> | <code>interface{}</code> | url_file_name_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlPathCondition">UrlPathCondition</a></code> | <code>interface{}</code> | url_path_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRedirectAction">UrlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a></code> | url_redirect_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRewriteAction">UrlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a></code> | url_rewrite_action block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#order CdnEndpoint#order}.

---

##### `CacheExpirationAction`<sup>Optional</sup> <a name="CacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheExpirationAction"></a>

```go
CacheExpirationAction CdnEndpointDeliveryRuleCacheExpirationAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

cache_expiration_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#cache_expiration_action CdnEndpoint#cache_expiration_action}

---

##### `CacheKeyQueryStringAction`<sup>Optional</sup> <a name="CacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheKeyQueryStringAction"></a>

```go
CacheKeyQueryStringAction CdnEndpointDeliveryRuleCacheKeyQueryStringAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

cache_key_query_string_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#cache_key_query_string_action CdnEndpoint#cache_key_query_string_action}

---

##### `CookiesCondition`<sup>Optional</sup> <a name="CookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cookiesCondition"></a>

```go
CookiesCondition interface{}
```

- *Type:* interface{}

cookies_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#cookies_condition CdnEndpoint#cookies_condition}

---

##### `DeviceCondition`<sup>Optional</sup> <a name="DeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.deviceCondition"></a>

```go
DeviceCondition CdnEndpointDeliveryRuleDeviceCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

device_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#device_condition CdnEndpoint#device_condition}

---

##### `HttpVersionCondition`<sup>Optional</sup> <a name="HttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.httpVersionCondition"></a>

```go
HttpVersionCondition interface{}
```

- *Type:* interface{}

http_version_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#http_version_condition CdnEndpoint#http_version_condition}

---

##### `ModifyRequestHeaderAction`<sup>Optional</sup> <a name="ModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyRequestHeaderAction"></a>

```go
ModifyRequestHeaderAction interface{}
```

- *Type:* interface{}

modify_request_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#modify_request_header_action CdnEndpoint#modify_request_header_action}

---

##### `ModifyResponseHeaderAction`<sup>Optional</sup> <a name="ModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyResponseHeaderAction"></a>

```go
ModifyResponseHeaderAction interface{}
```

- *Type:* interface{}

modify_response_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#modify_response_header_action CdnEndpoint#modify_response_header_action}

---

##### `PostArgCondition`<sup>Optional</sup> <a name="PostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.postArgCondition"></a>

```go
PostArgCondition interface{}
```

- *Type:* interface{}

post_arg_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#post_arg_condition CdnEndpoint#post_arg_condition}

---

##### `QueryStringCondition`<sup>Optional</sup> <a name="QueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.queryStringCondition"></a>

```go
QueryStringCondition interface{}
```

- *Type:* interface{}

query_string_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#query_string_condition CdnEndpoint#query_string_condition}

---

##### `RemoteAddressCondition`<sup>Optional</sup> <a name="RemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.remoteAddressCondition"></a>

```go
RemoteAddressCondition interface{}
```

- *Type:* interface{}

remote_address_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#remote_address_condition CdnEndpoint#remote_address_condition}

---

##### `RequestBodyCondition`<sup>Optional</sup> <a name="RequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestBodyCondition"></a>

```go
RequestBodyCondition interface{}
```

- *Type:* interface{}

request_body_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#request_body_condition CdnEndpoint#request_body_condition}

---

##### `RequestHeaderCondition`<sup>Optional</sup> <a name="RequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestHeaderCondition"></a>

```go
RequestHeaderCondition interface{}
```

- *Type:* interface{}

request_header_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#request_header_condition CdnEndpoint#request_header_condition}

---

##### `RequestMethodCondition`<sup>Optional</sup> <a name="RequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestMethodCondition"></a>

```go
RequestMethodCondition CdnEndpointDeliveryRuleRequestMethodCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

request_method_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#request_method_condition CdnEndpoint#request_method_condition}

---

##### `RequestSchemeCondition`<sup>Optional</sup> <a name="RequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestSchemeCondition"></a>

```go
RequestSchemeCondition CdnEndpointDeliveryRuleRequestSchemeCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

request_scheme_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#request_scheme_condition CdnEndpoint#request_scheme_condition}

---

##### `RequestUriCondition`<sup>Optional</sup> <a name="RequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestUriCondition"></a>

```go
RequestUriCondition interface{}
```

- *Type:* interface{}

request_uri_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#request_uri_condition CdnEndpoint#request_uri_condition}

---

##### `UrlFileExtensionCondition`<sup>Optional</sup> <a name="UrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileExtensionCondition"></a>

```go
UrlFileExtensionCondition interface{}
```

- *Type:* interface{}

url_file_extension_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#url_file_extension_condition CdnEndpoint#url_file_extension_condition}

---

##### `UrlFileNameCondition`<sup>Optional</sup> <a name="UrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileNameCondition"></a>

```go
UrlFileNameCondition interface{}
```

- *Type:* interface{}

url_file_name_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#url_file_name_condition CdnEndpoint#url_file_name_condition}

---

##### `UrlPathCondition`<sup>Optional</sup> <a name="UrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlPathCondition"></a>

```go
UrlPathCondition interface{}
```

- *Type:* interface{}

url_path_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#url_path_condition CdnEndpoint#url_path_condition}

---

##### `UrlRedirectAction`<sup>Optional</sup> <a name="UrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRedirectAction"></a>

```go
UrlRedirectAction CdnEndpointDeliveryRuleUrlRedirectAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

url_redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#url_redirect_action CdnEndpoint#url_redirect_action}

---

##### `UrlRewriteAction`<sup>Optional</sup> <a name="UrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRewriteAction"></a>

```go
UrlRewriteAction CdnEndpointDeliveryRuleUrlRewriteAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

url_rewrite_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#url_rewrite_action CdnEndpoint#url_rewrite_action}

---

### CdnEndpointDeliveryRuleCacheExpirationAction <a name="CdnEndpointDeliveryRuleCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleCacheExpirationAction {
	Behavior: *string,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.behavior">Behavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}. |

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}.

---

### CdnEndpointDeliveryRuleCacheKeyQueryStringAction <a name="CdnEndpointDeliveryRuleCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction {
	Behavior: *string,
	Parameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.behavior">Behavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}. |

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}.

---

### CdnEndpointDeliveryRuleCookiesCondition <a name="CdnEndpointDeliveryRuleCookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleCookiesCondition {
	Operator: *string,
	Selector: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.selector">Selector</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.selector"></a>

```go
Selector *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleDeviceCondition <a name="CdnEndpointDeliveryRuleDeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleDeviceCondition {
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleHttpVersionCondition <a name="CdnEndpointDeliveryRuleHttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleHttpVersionCondition {
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleModifyRequestHeaderAction <a name="CdnEndpointDeliveryRuleModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction {
	Action: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointDeliveryRuleModifyResponseHeaderAction <a name="CdnEndpointDeliveryRuleModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction {
	Action: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointDeliveryRulePostArgCondition <a name="CdnEndpointDeliveryRulePostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRulePostArgCondition {
	Operator: *string,
	Selector: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.selector">Selector</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.selector"></a>

```go
Selector *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleQueryStringCondition <a name="CdnEndpointDeliveryRuleQueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleQueryStringCondition {
	Operator: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleRemoteAddressCondition <a name="CdnEndpointDeliveryRuleRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleRemoteAddressCondition {
	Operator: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

### CdnEndpointDeliveryRuleRequestBodyCondition <a name="CdnEndpointDeliveryRuleRequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleRequestBodyCondition {
	Operator: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleRequestHeaderCondition <a name="CdnEndpointDeliveryRuleRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleRequestHeaderCondition {
	Operator: *string,
	Selector: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.selector">Selector</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.selector"></a>

```go
Selector *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleRequestMethodCondition <a name="CdnEndpointDeliveryRuleRequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleRequestMethodCondition {
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleRequestSchemeCondition <a name="CdnEndpointDeliveryRuleRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleRequestSchemeCondition {
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleRequestUriCondition <a name="CdnEndpointDeliveryRuleRequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleRequestUriCondition {
	Operator: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlFileExtensionCondition <a name="CdnEndpointDeliveryRuleUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition {
	Operator: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlFileNameCondition <a name="CdnEndpointDeliveryRuleUrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleUrlFileNameCondition {
	Operator: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlPathCondition <a name="CdnEndpointDeliveryRuleUrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleUrlPathCondition {
	Operator: *string,
	MatchValues: *[]*string,
	NegateCondition: interface{},
	Transforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `MatchValues`<sup>Optional</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.matchValues"></a>

```go
MatchValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlRedirectAction <a name="CdnEndpointDeliveryRuleUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleUrlRedirectAction {
	RedirectType: *string,
	Fragment: *string,
	Hostname: *string,
	Path: *string,
	Protocol: *string,
	QueryString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.redirectType">RedirectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.fragment">Fragment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.queryString">QueryString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}. |

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.redirectType"></a>

```go
RedirectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}.

---

##### `Fragment`<sup>Optional</sup> <a name="Fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.fragment"></a>

```go
Fragment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}.

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}.

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}.

---

### CdnEndpointDeliveryRuleUrlRewriteAction <a name="CdnEndpointDeliveryRuleUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointDeliveryRuleUrlRewriteAction {
	Destination: *string,
	SourcePattern: *string,
	PreserveUnmatchedPath: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.sourcePattern">SourcePattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath">PreserveUnmatchedPath</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}.

---

##### `SourcePattern`<sup>Required</sup> <a name="SourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.sourcePattern"></a>

```go
SourcePattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}.

---

##### `PreserveUnmatchedPath`<sup>Optional</sup> <a name="PreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath"></a>

```go
PreserveUnmatchedPath interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}.

---

### CdnEndpointGeoFilter <a name="CdnEndpointGeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointGeoFilter {
	Action: *string,
	CountryCodes: *[]*string,
	RelativePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.countryCodes">CountryCodes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#country_codes CdnEndpoint#country_codes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.relativePath">RelativePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#relative_path CdnEndpoint#relative_path}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `CountryCodes`<sup>Required</sup> <a name="CountryCodes" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.countryCodes"></a>

```go
CountryCodes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#country_codes CdnEndpoint#country_codes}.

---

##### `RelativePath`<sup>Required</sup> <a name="RelativePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.relativePath"></a>

```go
RelativePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#relative_path CdnEndpoint#relative_path}.

---

### CdnEndpointGlobalDeliveryRule <a name="CdnEndpointGlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointGlobalDeliveryRule {
	CacheExpirationAction: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction,
	CacheKeyQueryStringAction: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction,
	ModifyRequestHeaderAction: interface{},
	ModifyResponseHeaderAction: interface{},
	UrlRedirectAction: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction,
	UrlRewriteAction: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheExpirationAction">CacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a></code> | cache_expiration_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheKeyQueryStringAction">CacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a></code> | cache_key_query_string_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyRequestHeaderAction">ModifyRequestHeaderAction</a></code> | <code>interface{}</code> | modify_request_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyResponseHeaderAction">ModifyResponseHeaderAction</a></code> | <code>interface{}</code> | modify_response_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRedirectAction">UrlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a></code> | url_redirect_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRewriteAction">UrlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a></code> | url_rewrite_action block. |

---

##### `CacheExpirationAction`<sup>Optional</sup> <a name="CacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheExpirationAction"></a>

```go
CacheExpirationAction CdnEndpointGlobalDeliveryRuleCacheExpirationAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

cache_expiration_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#cache_expiration_action CdnEndpoint#cache_expiration_action}

---

##### `CacheKeyQueryStringAction`<sup>Optional</sup> <a name="CacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheKeyQueryStringAction"></a>

```go
CacheKeyQueryStringAction CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

cache_key_query_string_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#cache_key_query_string_action CdnEndpoint#cache_key_query_string_action}

---

##### `ModifyRequestHeaderAction`<sup>Optional</sup> <a name="ModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyRequestHeaderAction"></a>

```go
ModifyRequestHeaderAction interface{}
```

- *Type:* interface{}

modify_request_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#modify_request_header_action CdnEndpoint#modify_request_header_action}

---

##### `ModifyResponseHeaderAction`<sup>Optional</sup> <a name="ModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyResponseHeaderAction"></a>

```go
ModifyResponseHeaderAction interface{}
```

- *Type:* interface{}

modify_response_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#modify_response_header_action CdnEndpoint#modify_response_header_action}

---

##### `UrlRedirectAction`<sup>Optional</sup> <a name="UrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRedirectAction"></a>

```go
UrlRedirectAction CdnEndpointGlobalDeliveryRuleUrlRedirectAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

url_redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#url_redirect_action CdnEndpoint#url_redirect_action}

---

##### `UrlRewriteAction`<sup>Optional</sup> <a name="UrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRewriteAction"></a>

```go
UrlRewriteAction CdnEndpointGlobalDeliveryRuleUrlRewriteAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

url_rewrite_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#url_rewrite_action CdnEndpoint#url_rewrite_action}

---

### CdnEndpointGlobalDeliveryRuleCacheExpirationAction <a name="CdnEndpointGlobalDeliveryRuleCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction {
	Behavior: *string,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.behavior">Behavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}. |

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}.

---

### CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction <a name="CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction {
	Behavior: *string,
	Parameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.behavior">Behavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}. |

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}.

---

### CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction <a name="CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction {
	Action: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction <a name="CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction {
	Action: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointGlobalDeliveryRuleUrlRedirectAction <a name="CdnEndpointGlobalDeliveryRuleUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction {
	RedirectType: *string,
	Fragment: *string,
	Hostname: *string,
	Path: *string,
	Protocol: *string,
	QueryString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.redirectType">RedirectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.fragment">Fragment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.queryString">QueryString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}. |

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.redirectType"></a>

```go
RedirectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}.

---

##### `Fragment`<sup>Optional</sup> <a name="Fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.fragment"></a>

```go
Fragment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}.

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}.

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}.

---

### CdnEndpointGlobalDeliveryRuleUrlRewriteAction <a name="CdnEndpointGlobalDeliveryRuleUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction {
	Destination: *string,
	SourcePattern: *string,
	PreserveUnmatchedPath: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.sourcePattern">SourcePattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath">PreserveUnmatchedPath</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}.

---

##### `SourcePattern`<sup>Required</sup> <a name="SourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.sourcePattern"></a>

```go
SourcePattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}.

---

##### `PreserveUnmatchedPath`<sup>Optional</sup> <a name="PreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath"></a>

```go
PreserveUnmatchedPath interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}.

---

### CdnEndpointOrigin <a name="CdnEndpointOrigin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointOrigin {
	HostName: *string,
	Name: *string,
	HttpPort: *f64,
	HttpsPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#host_name CdnEndpoint#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpPort">HttpPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#http_port CdnEndpoint#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#https_port CdnEndpoint#https_port}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#host_name CdnEndpoint#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `HttpPort`<sup>Optional</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpPort"></a>

```go
HttpPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#http_port CdnEndpoint#http_port}.

---

##### `HttpsPort`<sup>Optional</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpsPort"></a>

```go
HttpsPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#https_port CdnEndpoint#https_port}.

---

### CdnEndpointTimeouts <a name="CdnEndpointTimeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

&cdnendpoint.CdnEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#create CdnEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#delete CdnEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#read CdnEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#update CdnEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#create CdnEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#delete CdnEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#read CdnEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/cdn_endpoint#update CdnEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnEndpointDeliveryRuleCacheExpirationActionOutputReference <a name="CdnEndpointDeliveryRuleCacheExpirationActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleCacheExpirationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointDeliveryRuleCacheExpirationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resetDuration"></a>

```go
func ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointDeliveryRuleCacheExpirationAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

---


### CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference <a name="CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointDeliveryRuleCacheKeyQueryStringAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

---


### CdnEndpointDeliveryRuleCookiesConditionList <a name="CdnEndpointDeliveryRuleCookiesConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleCookiesConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleCookiesConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleCookiesConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleCookiesConditionOutputReference <a name="CdnEndpointDeliveryRuleCookiesConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleCookiesConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleCookiesConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selector">Selector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selector"></a>

```go
func Selector() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleDeviceConditionOutputReference <a name="CdnEndpointDeliveryRuleDeviceConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleDeviceConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointDeliveryRuleDeviceConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointDeliveryRuleDeviceCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

---


### CdnEndpointDeliveryRuleHttpVersionConditionList <a name="CdnEndpointDeliveryRuleHttpVersionConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleHttpVersionConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleHttpVersionConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleHttpVersionConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleHttpVersionConditionOutputReference <a name="CdnEndpointDeliveryRuleHttpVersionConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleHttpVersionConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleHttpVersionConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleList <a name="CdnEndpointDeliveryRuleList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleModifyRequestHeaderActionList <a name="CdnEndpointDeliveryRuleModifyRequestHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleModifyRequestHeaderActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleModifyRequestHeaderActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference <a name="CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleModifyResponseHeaderActionList <a name="CdnEndpointDeliveryRuleModifyResponseHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleModifyResponseHeaderActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleModifyResponseHeaderActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference <a name="CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleOutputReference <a name="CdnEndpointDeliveryRuleOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheExpirationAction">PutCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheKeyQueryStringAction">PutCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCookiesCondition">PutCookiesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putDeviceCondition">PutDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putHttpVersionCondition">PutHttpVersionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyRequestHeaderAction">PutModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyResponseHeaderAction">PutModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putPostArgCondition">PutPostArgCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putQueryStringCondition">PutQueryStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRemoteAddressCondition">PutRemoteAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestBodyCondition">PutRequestBodyCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestHeaderCondition">PutRequestHeaderCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestMethodCondition">PutRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestSchemeCondition">PutRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestUriCondition">PutRequestUriCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileExtensionCondition">PutUrlFileExtensionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileNameCondition">PutUrlFileNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlPathCondition">PutUrlPathCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRedirectAction">PutUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRewriteAction">PutUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheExpirationAction">ResetCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheKeyQueryStringAction">ResetCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCookiesCondition">ResetCookiesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetDeviceCondition">ResetDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetHttpVersionCondition">ResetHttpVersionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyRequestHeaderAction">ResetModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyResponseHeaderAction">ResetModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetPostArgCondition">ResetPostArgCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetQueryStringCondition">ResetQueryStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRemoteAddressCondition">ResetRemoteAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestBodyCondition">ResetRequestBodyCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestHeaderCondition">ResetRequestHeaderCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestMethodCondition">ResetRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestSchemeCondition">ResetRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestUriCondition">ResetRequestUriCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileExtensionCondition">ResetUrlFileExtensionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileNameCondition">ResetUrlFileNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlPathCondition">ResetUrlPathCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRedirectAction">ResetUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRewriteAction">ResetUrlRewriteAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCacheExpirationAction` <a name="PutCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheExpirationAction"></a>

```go
func PutCacheExpirationAction(value CdnEndpointDeliveryRuleCacheExpirationAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheExpirationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

---

##### `PutCacheKeyQueryStringAction` <a name="PutCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheKeyQueryStringAction"></a>

```go
func PutCacheKeyQueryStringAction(value CdnEndpointDeliveryRuleCacheKeyQueryStringAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheKeyQueryStringAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `PutCookiesCondition` <a name="PutCookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCookiesCondition"></a>

```go
func PutCookiesCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCookiesCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeviceCondition` <a name="PutDeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putDeviceCondition"></a>

```go
func PutDeviceCondition(value CdnEndpointDeliveryRuleDeviceCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putDeviceCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

---

##### `PutHttpVersionCondition` <a name="PutHttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putHttpVersionCondition"></a>

```go
func PutHttpVersionCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putHttpVersionCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutModifyRequestHeaderAction` <a name="PutModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyRequestHeaderAction"></a>

```go
func PutModifyRequestHeaderAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyRequestHeaderAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutModifyResponseHeaderAction` <a name="PutModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyResponseHeaderAction"></a>

```go
func PutModifyResponseHeaderAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyResponseHeaderAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPostArgCondition` <a name="PutPostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putPostArgCondition"></a>

```go
func PutPostArgCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putPostArgCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryStringCondition` <a name="PutQueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putQueryStringCondition"></a>

```go
func PutQueryStringCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putQueryStringCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRemoteAddressCondition` <a name="PutRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRemoteAddressCondition"></a>

```go
func PutRemoteAddressCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRemoteAddressCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestBodyCondition` <a name="PutRequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestBodyCondition"></a>

```go
func PutRequestBodyCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestBodyCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeaderCondition` <a name="PutRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestHeaderCondition"></a>

```go
func PutRequestHeaderCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestHeaderCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestMethodCondition` <a name="PutRequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestMethodCondition"></a>

```go
func PutRequestMethodCondition(value CdnEndpointDeliveryRuleRequestMethodCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestMethodCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

---

##### `PutRequestSchemeCondition` <a name="PutRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestSchemeCondition"></a>

```go
func PutRequestSchemeCondition(value CdnEndpointDeliveryRuleRequestSchemeCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestSchemeCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

---

##### `PutRequestUriCondition` <a name="PutRequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestUriCondition"></a>

```go
func PutRequestUriCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestUriCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUrlFileExtensionCondition` <a name="PutUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileExtensionCondition"></a>

```go
func PutUrlFileExtensionCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileExtensionCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUrlFileNameCondition` <a name="PutUrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileNameCondition"></a>

```go
func PutUrlFileNameCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileNameCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUrlPathCondition` <a name="PutUrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlPathCondition"></a>

```go
func PutUrlPathCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlPathCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUrlRedirectAction` <a name="PutUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRedirectAction"></a>

```go
func PutUrlRedirectAction(value CdnEndpointDeliveryRuleUrlRedirectAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

---

##### `PutUrlRewriteAction` <a name="PutUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRewriteAction"></a>

```go
func PutUrlRewriteAction(value CdnEndpointDeliveryRuleUrlRewriteAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRewriteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

---

##### `ResetCacheExpirationAction` <a name="ResetCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheExpirationAction"></a>

```go
func ResetCacheExpirationAction()
```

##### `ResetCacheKeyQueryStringAction` <a name="ResetCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheKeyQueryStringAction"></a>

```go
func ResetCacheKeyQueryStringAction()
```

##### `ResetCookiesCondition` <a name="ResetCookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCookiesCondition"></a>

```go
func ResetCookiesCondition()
```

##### `ResetDeviceCondition` <a name="ResetDeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetDeviceCondition"></a>

```go
func ResetDeviceCondition()
```

##### `ResetHttpVersionCondition` <a name="ResetHttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetHttpVersionCondition"></a>

```go
func ResetHttpVersionCondition()
```

##### `ResetModifyRequestHeaderAction` <a name="ResetModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyRequestHeaderAction"></a>

```go
func ResetModifyRequestHeaderAction()
```

##### `ResetModifyResponseHeaderAction` <a name="ResetModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyResponseHeaderAction"></a>

```go
func ResetModifyResponseHeaderAction()
```

##### `ResetPostArgCondition` <a name="ResetPostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetPostArgCondition"></a>

```go
func ResetPostArgCondition()
```

##### `ResetQueryStringCondition` <a name="ResetQueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetQueryStringCondition"></a>

```go
func ResetQueryStringCondition()
```

##### `ResetRemoteAddressCondition` <a name="ResetRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRemoteAddressCondition"></a>

```go
func ResetRemoteAddressCondition()
```

##### `ResetRequestBodyCondition` <a name="ResetRequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestBodyCondition"></a>

```go
func ResetRequestBodyCondition()
```

##### `ResetRequestHeaderCondition` <a name="ResetRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestHeaderCondition"></a>

```go
func ResetRequestHeaderCondition()
```

##### `ResetRequestMethodCondition` <a name="ResetRequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestMethodCondition"></a>

```go
func ResetRequestMethodCondition()
```

##### `ResetRequestSchemeCondition` <a name="ResetRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestSchemeCondition"></a>

```go
func ResetRequestSchemeCondition()
```

##### `ResetRequestUriCondition` <a name="ResetRequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestUriCondition"></a>

```go
func ResetRequestUriCondition()
```

##### `ResetUrlFileExtensionCondition` <a name="ResetUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileExtensionCondition"></a>

```go
func ResetUrlFileExtensionCondition()
```

##### `ResetUrlFileNameCondition` <a name="ResetUrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileNameCondition"></a>

```go
func ResetUrlFileNameCondition()
```

##### `ResetUrlPathCondition` <a name="ResetUrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlPathCondition"></a>

```go
func ResetUrlPathCondition()
```

##### `ResetUrlRedirectAction` <a name="ResetUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRedirectAction"></a>

```go
func ResetUrlRedirectAction()
```

##### `ResetUrlRewriteAction` <a name="ResetUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRewriteAction"></a>

```go
func ResetUrlRewriteAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationAction">CacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointDeliveryRuleCacheExpirationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringAction">CacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesCondition">CookiesCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList">CdnEndpointDeliveryRuleCookiesConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceCondition">DeviceCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference">CdnEndpointDeliveryRuleDeviceConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionCondition">HttpVersionCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList">CdnEndpointDeliveryRuleHttpVersionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderAction">ModifyRequestHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList">CdnEndpointDeliveryRuleModifyRequestHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderAction">ModifyResponseHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList">CdnEndpointDeliveryRuleModifyResponseHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgCondition">PostArgCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList">CdnEndpointDeliveryRulePostArgConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringCondition">QueryStringCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList">CdnEndpointDeliveryRuleQueryStringConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressCondition">RemoteAddressCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList">CdnEndpointDeliveryRuleRemoteAddressConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyCondition">RequestBodyCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList">CdnEndpointDeliveryRuleRequestBodyConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderCondition">RequestHeaderCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList">CdnEndpointDeliveryRuleRequestHeaderConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodCondition">RequestMethodCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference">CdnEndpointDeliveryRuleRequestMethodConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeCondition">RequestSchemeCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference">CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriCondition">RequestUriCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList">CdnEndpointDeliveryRuleRequestUriConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionCondition">UrlFileExtensionCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList">CdnEndpointDeliveryRuleUrlFileExtensionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameCondition">UrlFileNameCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList">CdnEndpointDeliveryRuleUrlFileNameConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathCondition">UrlPathCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList">CdnEndpointDeliveryRuleUrlPathConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectAction">UrlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointDeliveryRuleUrlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteAction">UrlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointDeliveryRuleUrlRewriteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationActionInput">CacheExpirationActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput">CacheKeyQueryStringActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesConditionInput">CookiesConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceConditionInput">DeviceConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionConditionInput">HttpVersionConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput">ModifyRequestHeaderActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput">ModifyResponseHeaderActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgConditionInput">PostArgConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringConditionInput">QueryStringConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressConditionInput">RemoteAddressConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyConditionInput">RequestBodyConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderConditionInput">RequestHeaderConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodConditionInput">RequestMethodConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeConditionInput">RequestSchemeConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriConditionInput">RequestUriConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionConditionInput">UrlFileExtensionConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameConditionInput">UrlFileNameConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathConditionInput">UrlPathConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectActionInput">UrlRedirectActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteActionInput">UrlRewriteActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheExpirationAction`<sup>Required</sup> <a name="CacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationAction"></a>

```go
func CacheExpirationAction() CdnEndpointDeliveryRuleCacheExpirationActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointDeliveryRuleCacheExpirationActionOutputReference</a>

---

##### `CacheKeyQueryStringAction`<sup>Required</sup> <a name="CacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringAction"></a>

```go
func CacheKeyQueryStringAction() CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference</a>

---

##### `CookiesCondition`<sup>Required</sup> <a name="CookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesCondition"></a>

```go
func CookiesCondition() CdnEndpointDeliveryRuleCookiesConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList">CdnEndpointDeliveryRuleCookiesConditionList</a>

---

##### `DeviceCondition`<sup>Required</sup> <a name="DeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceCondition"></a>

```go
func DeviceCondition() CdnEndpointDeliveryRuleDeviceConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference">CdnEndpointDeliveryRuleDeviceConditionOutputReference</a>

---

##### `HttpVersionCondition`<sup>Required</sup> <a name="HttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionCondition"></a>

```go
func HttpVersionCondition() CdnEndpointDeliveryRuleHttpVersionConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList">CdnEndpointDeliveryRuleHttpVersionConditionList</a>

---

##### `ModifyRequestHeaderAction`<sup>Required</sup> <a name="ModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderAction"></a>

```go
func ModifyRequestHeaderAction() CdnEndpointDeliveryRuleModifyRequestHeaderActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList">CdnEndpointDeliveryRuleModifyRequestHeaderActionList</a>

---

##### `ModifyResponseHeaderAction`<sup>Required</sup> <a name="ModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderAction"></a>

```go
func ModifyResponseHeaderAction() CdnEndpointDeliveryRuleModifyResponseHeaderActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList">CdnEndpointDeliveryRuleModifyResponseHeaderActionList</a>

---

##### `PostArgCondition`<sup>Required</sup> <a name="PostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgCondition"></a>

```go
func PostArgCondition() CdnEndpointDeliveryRulePostArgConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList">CdnEndpointDeliveryRulePostArgConditionList</a>

---

##### `QueryStringCondition`<sup>Required</sup> <a name="QueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringCondition"></a>

```go
func QueryStringCondition() CdnEndpointDeliveryRuleQueryStringConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList">CdnEndpointDeliveryRuleQueryStringConditionList</a>

---

##### `RemoteAddressCondition`<sup>Required</sup> <a name="RemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressCondition"></a>

```go
func RemoteAddressCondition() CdnEndpointDeliveryRuleRemoteAddressConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList">CdnEndpointDeliveryRuleRemoteAddressConditionList</a>

---

##### `RequestBodyCondition`<sup>Required</sup> <a name="RequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyCondition"></a>

```go
func RequestBodyCondition() CdnEndpointDeliveryRuleRequestBodyConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList">CdnEndpointDeliveryRuleRequestBodyConditionList</a>

---

##### `RequestHeaderCondition`<sup>Required</sup> <a name="RequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderCondition"></a>

```go
func RequestHeaderCondition() CdnEndpointDeliveryRuleRequestHeaderConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList">CdnEndpointDeliveryRuleRequestHeaderConditionList</a>

---

##### `RequestMethodCondition`<sup>Required</sup> <a name="RequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodCondition"></a>

```go
func RequestMethodCondition() CdnEndpointDeliveryRuleRequestMethodConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference">CdnEndpointDeliveryRuleRequestMethodConditionOutputReference</a>

---

##### `RequestSchemeCondition`<sup>Required</sup> <a name="RequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeCondition"></a>

```go
func RequestSchemeCondition() CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference">CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference</a>

---

##### `RequestUriCondition`<sup>Required</sup> <a name="RequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriCondition"></a>

```go
func RequestUriCondition() CdnEndpointDeliveryRuleRequestUriConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList">CdnEndpointDeliveryRuleRequestUriConditionList</a>

---

##### `UrlFileExtensionCondition`<sup>Required</sup> <a name="UrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionCondition"></a>

```go
func UrlFileExtensionCondition() CdnEndpointDeliveryRuleUrlFileExtensionConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList">CdnEndpointDeliveryRuleUrlFileExtensionConditionList</a>

---

##### `UrlFileNameCondition`<sup>Required</sup> <a name="UrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameCondition"></a>

```go
func UrlFileNameCondition() CdnEndpointDeliveryRuleUrlFileNameConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList">CdnEndpointDeliveryRuleUrlFileNameConditionList</a>

---

##### `UrlPathCondition`<sup>Required</sup> <a name="UrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathCondition"></a>

```go
func UrlPathCondition() CdnEndpointDeliveryRuleUrlPathConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList">CdnEndpointDeliveryRuleUrlPathConditionList</a>

---

##### `UrlRedirectAction`<sup>Required</sup> <a name="UrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectAction"></a>

```go
func UrlRedirectAction() CdnEndpointDeliveryRuleUrlRedirectActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointDeliveryRuleUrlRedirectActionOutputReference</a>

---

##### `UrlRewriteAction`<sup>Required</sup> <a name="UrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteAction"></a>

```go
func UrlRewriteAction() CdnEndpointDeliveryRuleUrlRewriteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointDeliveryRuleUrlRewriteActionOutputReference</a>

---

##### `CacheExpirationActionInput`<sup>Optional</sup> <a name="CacheExpirationActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationActionInput"></a>

```go
func CacheExpirationActionInput() CdnEndpointDeliveryRuleCacheExpirationAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

---

##### `CacheKeyQueryStringActionInput`<sup>Optional</sup> <a name="CacheKeyQueryStringActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput"></a>

```go
func CacheKeyQueryStringActionInput() CdnEndpointDeliveryRuleCacheKeyQueryStringAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `CookiesConditionInput`<sup>Optional</sup> <a name="CookiesConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesConditionInput"></a>

```go
func CookiesConditionInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceConditionInput`<sup>Optional</sup> <a name="DeviceConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceConditionInput"></a>

```go
func DeviceConditionInput() CdnEndpointDeliveryRuleDeviceCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

---

##### `HttpVersionConditionInput`<sup>Optional</sup> <a name="HttpVersionConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionConditionInput"></a>

```go
func HttpVersionConditionInput() interface{}
```

- *Type:* interface{}

---

##### `ModifyRequestHeaderActionInput`<sup>Optional</sup> <a name="ModifyRequestHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput"></a>

```go
func ModifyRequestHeaderActionInput() interface{}
```

- *Type:* interface{}

---

##### `ModifyResponseHeaderActionInput`<sup>Optional</sup> <a name="ModifyResponseHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput"></a>

```go
func ModifyResponseHeaderActionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `PostArgConditionInput`<sup>Optional</sup> <a name="PostArgConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgConditionInput"></a>

```go
func PostArgConditionInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringConditionInput`<sup>Optional</sup> <a name="QueryStringConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringConditionInput"></a>

```go
func QueryStringConditionInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteAddressConditionInput`<sup>Optional</sup> <a name="RemoteAddressConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressConditionInput"></a>

```go
func RemoteAddressConditionInput() interface{}
```

- *Type:* interface{}

---

##### `RequestBodyConditionInput`<sup>Optional</sup> <a name="RequestBodyConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyConditionInput"></a>

```go
func RequestBodyConditionInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderConditionInput`<sup>Optional</sup> <a name="RequestHeaderConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderConditionInput"></a>

```go
func RequestHeaderConditionInput() interface{}
```

- *Type:* interface{}

---

##### `RequestMethodConditionInput`<sup>Optional</sup> <a name="RequestMethodConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodConditionInput"></a>

```go
func RequestMethodConditionInput() CdnEndpointDeliveryRuleRequestMethodCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

---

##### `RequestSchemeConditionInput`<sup>Optional</sup> <a name="RequestSchemeConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeConditionInput"></a>

```go
func RequestSchemeConditionInput() CdnEndpointDeliveryRuleRequestSchemeCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

---

##### `RequestUriConditionInput`<sup>Optional</sup> <a name="RequestUriConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriConditionInput"></a>

```go
func RequestUriConditionInput() interface{}
```

- *Type:* interface{}

---

##### `UrlFileExtensionConditionInput`<sup>Optional</sup> <a name="UrlFileExtensionConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionConditionInput"></a>

```go
func UrlFileExtensionConditionInput() interface{}
```

- *Type:* interface{}

---

##### `UrlFileNameConditionInput`<sup>Optional</sup> <a name="UrlFileNameConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameConditionInput"></a>

```go
func UrlFileNameConditionInput() interface{}
```

- *Type:* interface{}

---

##### `UrlPathConditionInput`<sup>Optional</sup> <a name="UrlPathConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathConditionInput"></a>

```go
func UrlPathConditionInput() interface{}
```

- *Type:* interface{}

---

##### `UrlRedirectActionInput`<sup>Optional</sup> <a name="UrlRedirectActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectActionInput"></a>

```go
func UrlRedirectActionInput() CdnEndpointDeliveryRuleUrlRedirectAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

---

##### `UrlRewriteActionInput`<sup>Optional</sup> <a name="UrlRewriteActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteActionInput"></a>

```go
func UrlRewriteActionInput() CdnEndpointDeliveryRuleUrlRewriteAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRulePostArgConditionList <a name="CdnEndpointDeliveryRulePostArgConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRulePostArgConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRulePostArgConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRulePostArgConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRulePostArgConditionOutputReference <a name="CdnEndpointDeliveryRulePostArgConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRulePostArgConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRulePostArgConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selector">Selector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selector"></a>

```go
func Selector() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleQueryStringConditionList <a name="CdnEndpointDeliveryRuleQueryStringConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleQueryStringConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleQueryStringConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleQueryStringConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleQueryStringConditionOutputReference <a name="CdnEndpointDeliveryRuleQueryStringConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleQueryStringConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleQueryStringConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleRemoteAddressConditionList <a name="CdnEndpointDeliveryRuleRemoteAddressConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRemoteAddressConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleRemoteAddressConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference <a name="CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRemoteAddressConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleRequestBodyConditionList <a name="CdnEndpointDeliveryRuleRequestBodyConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRequestBodyConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleRequestBodyConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleRequestBodyConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleRequestBodyConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestBodyConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRequestBodyConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleRequestBodyConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleRequestHeaderConditionList <a name="CdnEndpointDeliveryRuleRequestHeaderConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRequestHeaderConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleRequestHeaderConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRequestHeaderConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selector">Selector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selector"></a>

```go
func Selector() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleRequestMethodConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestMethodConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRequestMethodConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointDeliveryRuleRequestMethodConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointDeliveryRuleRequestMethodCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

---


### CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRequestSchemeConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointDeliveryRuleRequestSchemeCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

---


### CdnEndpointDeliveryRuleRequestUriConditionList <a name="CdnEndpointDeliveryRuleRequestUriConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRequestUriConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleRequestUriConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleRequestUriConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleRequestUriConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestUriConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleRequestUriConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleRequestUriConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleUrlFileExtensionConditionList <a name="CdnEndpointDeliveryRuleUrlFileExtensionConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleUrlFileExtensionConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleUrlFileExtensionConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference <a name="CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleUrlFileNameConditionList <a name="CdnEndpointDeliveryRuleUrlFileNameConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleUrlFileNameConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleUrlFileNameConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference <a name="CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleUrlFileNameConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleUrlPathConditionList <a name="CdnEndpointDeliveryRuleUrlPathConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleUrlPathConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointDeliveryRuleUrlPathConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.get"></a>

```go
func Get(index *f64) CdnEndpointDeliveryRuleUrlPathConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleUrlPathConditionOutputReference <a name="CdnEndpointDeliveryRuleUrlPathConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleUrlPathConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointDeliveryRuleUrlPathConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetMatchValues">ResetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValues` <a name="ResetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetMatchValues"></a>

```go
func ResetMatchValues()
```

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValuesInput">MatchValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValues">MatchValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValuesInput`<sup>Optional</sup> <a name="MatchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValuesInput"></a>

```go
func MatchValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValues`<sup>Required</sup> <a name="MatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValues"></a>

```go
func MatchValues() *[]*string
```

- *Type:* *[]*string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointDeliveryRuleUrlRedirectActionOutputReference <a name="CdnEndpointDeliveryRuleUrlRedirectActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleUrlRedirectActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointDeliveryRuleUrlRedirectActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetFragment">ResetFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFragment` <a name="ResetFragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetFragment"></a>

```go
func ResetFragment()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput">FragmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput">RedirectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragment">Fragment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectType">RedirectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FragmentInput`<sup>Optional</sup> <a name="FragmentInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput"></a>

```go
func FragmentInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `RedirectTypeInput`<sup>Optional</sup> <a name="RedirectTypeInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput"></a>

```go
func RedirectTypeInput() *string
```

- *Type:* *string

---

##### `Fragment`<sup>Required</sup> <a name="Fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragment"></a>

```go
func Fragment() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectType"></a>

```go
func RedirectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointDeliveryRuleUrlRedirectAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

---


### CdnEndpointDeliveryRuleUrlRewriteActionOutputReference <a name="CdnEndpointDeliveryRuleUrlRewriteActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointDeliveryRuleUrlRewriteActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointDeliveryRuleUrlRewriteActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath">ResetPreserveUnmatchedPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreserveUnmatchedPath` <a name="ResetPreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath"></a>

```go
func ResetPreserveUnmatchedPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput">PreserveUnmatchedPathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput">SourcePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath">PreserveUnmatchedPath</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern">SourcePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `PreserveUnmatchedPathInput`<sup>Optional</sup> <a name="PreserveUnmatchedPathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput"></a>

```go
func PreserveUnmatchedPathInput() interface{}
```

- *Type:* interface{}

---

##### `SourcePatternInput`<sup>Optional</sup> <a name="SourcePatternInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput"></a>

```go
func SourcePatternInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `PreserveUnmatchedPath`<sup>Required</sup> <a name="PreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath"></a>

```go
func PreserveUnmatchedPath() interface{}
```

- *Type:* interface{}

---

##### `SourcePattern`<sup>Required</sup> <a name="SourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern"></a>

```go
func SourcePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointDeliveryRuleUrlRewriteAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

---


### CdnEndpointGeoFilterList <a name="CdnEndpointGeoFilterList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGeoFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointGeoFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.get"></a>

```go
func Get(index *f64) CdnEndpointGeoFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointGeoFilterOutputReference <a name="CdnEndpointGeoFilterOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGeoFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointGeoFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodesInput">CountryCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePathInput">RelativePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodes">CountryCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePath">RelativePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `CountryCodesInput`<sup>Optional</sup> <a name="CountryCodesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodesInput"></a>

```go
func CountryCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RelativePathInput`<sup>Optional</sup> <a name="RelativePathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePathInput"></a>

```go
func RelativePathInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `CountryCodes`<sup>Required</sup> <a name="CountryCodes" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodes"></a>

```go
func CountryCodes() *[]*string
```

- *Type:* *[]*string

---

##### `RelativePath`<sup>Required</sup> <a name="RelativePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePath"></a>

```go
func RelativePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resetDuration"></a>

```go
func ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointGlobalDeliveryRuleCacheExpirationAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

---


### CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

---


### CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList <a name="CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.get"></a>

```go
func Get(index *f64) CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList <a name="CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.get"></a>

```go
func Get(index *f64) CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointGlobalDeliveryRuleOutputReference <a name="CdnEndpointGlobalDeliveryRuleOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGlobalDeliveryRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointGlobalDeliveryRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheExpirationAction">PutCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheKeyQueryStringAction">PutCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyRequestHeaderAction">PutModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyResponseHeaderAction">PutModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRedirectAction">PutUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRewriteAction">PutUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheExpirationAction">ResetCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheKeyQueryStringAction">ResetCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyRequestHeaderAction">ResetModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyResponseHeaderAction">ResetModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRedirectAction">ResetUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRewriteAction">ResetUrlRewriteAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCacheExpirationAction` <a name="PutCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheExpirationAction"></a>

```go
func PutCacheExpirationAction(value CdnEndpointGlobalDeliveryRuleCacheExpirationAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheExpirationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

---

##### `PutCacheKeyQueryStringAction` <a name="PutCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheKeyQueryStringAction"></a>

```go
func PutCacheKeyQueryStringAction(value CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheKeyQueryStringAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `PutModifyRequestHeaderAction` <a name="PutModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyRequestHeaderAction"></a>

```go
func PutModifyRequestHeaderAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyRequestHeaderAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutModifyResponseHeaderAction` <a name="PutModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyResponseHeaderAction"></a>

```go
func PutModifyResponseHeaderAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyResponseHeaderAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUrlRedirectAction` <a name="PutUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRedirectAction"></a>

```go
func PutUrlRedirectAction(value CdnEndpointGlobalDeliveryRuleUrlRedirectAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

---

##### `PutUrlRewriteAction` <a name="PutUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRewriteAction"></a>

```go
func PutUrlRewriteAction(value CdnEndpointGlobalDeliveryRuleUrlRewriteAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRewriteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

---

##### `ResetCacheExpirationAction` <a name="ResetCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheExpirationAction"></a>

```go
func ResetCacheExpirationAction()
```

##### `ResetCacheKeyQueryStringAction` <a name="ResetCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheKeyQueryStringAction"></a>

```go
func ResetCacheKeyQueryStringAction()
```

##### `ResetModifyRequestHeaderAction` <a name="ResetModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyRequestHeaderAction"></a>

```go
func ResetModifyRequestHeaderAction()
```

##### `ResetModifyResponseHeaderAction` <a name="ResetModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyResponseHeaderAction"></a>

```go
func ResetModifyResponseHeaderAction()
```

##### `ResetUrlRedirectAction` <a name="ResetUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRedirectAction"></a>

```go
func ResetUrlRedirectAction()
```

##### `ResetUrlRewriteAction` <a name="ResetUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRewriteAction"></a>

```go
func ResetUrlRewriteAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationAction">CacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringAction">CacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderAction">ModifyRequestHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderAction">ModifyResponseHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectAction">UrlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteAction">UrlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationActionInput">CacheExpirationActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput">CacheKeyQueryStringActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput">ModifyRequestHeaderActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput">ModifyResponseHeaderActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectActionInput">UrlRedirectActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteActionInput">UrlRewriteActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheExpirationAction`<sup>Required</sup> <a name="CacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationAction"></a>

```go
func CacheExpirationAction() CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference</a>

---

##### `CacheKeyQueryStringAction`<sup>Required</sup> <a name="CacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringAction"></a>

```go
func CacheKeyQueryStringAction() CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference</a>

---

##### `ModifyRequestHeaderAction`<sup>Required</sup> <a name="ModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderAction"></a>

```go
func ModifyRequestHeaderAction() CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList</a>

---

##### `ModifyResponseHeaderAction`<sup>Required</sup> <a name="ModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderAction"></a>

```go
func ModifyResponseHeaderAction() CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList</a>

---

##### `UrlRedirectAction`<sup>Required</sup> <a name="UrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectAction"></a>

```go
func UrlRedirectAction() CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference</a>

---

##### `UrlRewriteAction`<sup>Required</sup> <a name="UrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteAction"></a>

```go
func UrlRewriteAction() CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference</a>

---

##### `CacheExpirationActionInput`<sup>Optional</sup> <a name="CacheExpirationActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationActionInput"></a>

```go
func CacheExpirationActionInput() CdnEndpointGlobalDeliveryRuleCacheExpirationAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

---

##### `CacheKeyQueryStringActionInput`<sup>Optional</sup> <a name="CacheKeyQueryStringActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput"></a>

```go
func CacheKeyQueryStringActionInput() CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `ModifyRequestHeaderActionInput`<sup>Optional</sup> <a name="ModifyRequestHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput"></a>

```go
func ModifyRequestHeaderActionInput() interface{}
```

- *Type:* interface{}

---

##### `ModifyResponseHeaderActionInput`<sup>Optional</sup> <a name="ModifyResponseHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput"></a>

```go
func ModifyResponseHeaderActionInput() interface{}
```

- *Type:* interface{}

---

##### `UrlRedirectActionInput`<sup>Optional</sup> <a name="UrlRedirectActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectActionInput"></a>

```go
func UrlRedirectActionInput() CdnEndpointGlobalDeliveryRuleUrlRedirectAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

---

##### `UrlRewriteActionInput`<sup>Optional</sup> <a name="UrlRewriteActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteActionInput"></a>

```go
func UrlRewriteActionInput() CdnEndpointGlobalDeliveryRuleUrlRewriteAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointGlobalDeliveryRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

---


### CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetFragment">ResetFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFragment` <a name="ResetFragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetFragment"></a>

```go
func ResetFragment()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput">FragmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput">RedirectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragment">Fragment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectType">RedirectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FragmentInput`<sup>Optional</sup> <a name="FragmentInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput"></a>

```go
func FragmentInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `RedirectTypeInput`<sup>Optional</sup> <a name="RedirectTypeInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput"></a>

```go
func RedirectTypeInput() *string
```

- *Type:* *string

---

##### `Fragment`<sup>Required</sup> <a name="Fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragment"></a>

```go
func Fragment() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectType"></a>

```go
func RedirectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointGlobalDeliveryRuleUrlRedirectAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

---


### CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath">ResetPreserveUnmatchedPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreserveUnmatchedPath` <a name="ResetPreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath"></a>

```go
func ResetPreserveUnmatchedPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput">PreserveUnmatchedPathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput">SourcePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath">PreserveUnmatchedPath</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern">SourcePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `PreserveUnmatchedPathInput`<sup>Optional</sup> <a name="PreserveUnmatchedPathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput"></a>

```go
func PreserveUnmatchedPathInput() interface{}
```

- *Type:* interface{}

---

##### `SourcePatternInput`<sup>Optional</sup> <a name="SourcePatternInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput"></a>

```go
func SourcePatternInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `PreserveUnmatchedPath`<sup>Required</sup> <a name="PreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath"></a>

```go
func PreserveUnmatchedPath() interface{}
```

- *Type:* interface{}

---

##### `SourcePattern`<sup>Required</sup> <a name="SourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern"></a>

```go
func SourcePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnEndpointGlobalDeliveryRuleUrlRewriteAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

---


### CdnEndpointOriginList <a name="CdnEndpointOriginList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointOriginList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnEndpointOriginList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.get"></a>

```go
func Get(index *f64) CdnEndpointOriginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointOriginOutputReference <a name="CdnEndpointOriginOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointOriginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnEndpointOriginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpPort">ResetHttpPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpsPort">ResetHttpsPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpPort` <a name="ResetHttpPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpPort"></a>

```go
func ResetHttpPort()
```

##### `ResetHttpsPort` <a name="ResetHttpsPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpsPort"></a>

```go
func ResetHttpsPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPortInput">HttpPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPortInput">HttpsPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPort">HttpPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPort">HttpsPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPortInput"></a>

```go
func HttpPortInput() *f64
```

- *Type:* *f64

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPortInput"></a>

```go
func HttpsPortInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPort"></a>

```go
func HttpPort() *f64
```

- *Type:* *f64

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPort"></a>

```go
func HttpsPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnEndpointTimeoutsOutputReference <a name="CdnEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/cdnendpoint"

cdnendpoint.NewCdnEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




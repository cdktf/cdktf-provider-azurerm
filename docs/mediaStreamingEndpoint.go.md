# `azurerm_media_streaming_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_media_streaming_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint).

# `mediaStreamingEndpoint` Submodule <a name="`mediaStreamingEndpoint` Submodule" id="@cdktf/provider-azurerm.mediaStreamingEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingEndpoint <a name="MediaStreamingEndpoint" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint azurerm_media_streaming_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpoint(scope Construct, id *string, config MediaStreamingEndpointConfig) MediaStreamingEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig">MediaStreamingEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig">MediaStreamingEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl">PutAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy">PutCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAccessControl">ResetAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAutoStartEnabled">ResetAutoStartEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnEnabled">ResetCdnEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProfile">ResetCdnProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProvider">ResetCdnProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCrossSiteAccessPolicy">ResetCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCustomHostNames">ResetCustomHostNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetMaxCacheAgeSeconds">ResetMaxCacheAgeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAccessControl` <a name="PutAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl"></a>

```go
func PutAccessControl(value MediaStreamingEndpointAccessControl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---

##### `PutCrossSiteAccessPolicy` <a name="PutCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy"></a>

```go
func PutCrossSiteAccessPolicy(value MediaStreamingEndpointCrossSiteAccessPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value MediaStreamingEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

---

##### `ResetAccessControl` <a name="ResetAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAccessControl"></a>

```go
func ResetAccessControl()
```

##### `ResetAutoStartEnabled` <a name="ResetAutoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAutoStartEnabled"></a>

```go
func ResetAutoStartEnabled()
```

##### `ResetCdnEnabled` <a name="ResetCdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnEnabled"></a>

```go
func ResetCdnEnabled()
```

##### `ResetCdnProfile` <a name="ResetCdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProfile"></a>

```go
func ResetCdnProfile()
```

##### `ResetCdnProvider` <a name="ResetCdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProvider"></a>

```go
func ResetCdnProvider()
```

##### `ResetCrossSiteAccessPolicy` <a name="ResetCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCrossSiteAccessPolicy"></a>

```go
func ResetCrossSiteAccessPolicy()
```

##### `ResetCustomHostNames` <a name="ResetCustomHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCustomHostNames"></a>

```go
func ResetCustomHostNames()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxCacheAgeSeconds` <a name="ResetMaxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetMaxCacheAgeSeconds"></a>

```go
func ResetMaxCacheAgeSeconds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.MediaStreamingEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.MediaStreamingEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.MediaStreamingEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference">MediaStreamingEndpointAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicy">CrossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference">MediaStreamingEndpointCrossSiteAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList">MediaStreamingEndpointSkuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference">MediaStreamingEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControlInput">AccessControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabledInput">AutoStartEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabledInput">CdnEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfileInput">CdnProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProviderInput">CdnProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicyInput">CrossSiteAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNamesInput">CustomHostNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSecondsInput">MaxCacheAgeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountNameInput">MediaServicesAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnitsInput">ScaleUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabled">AutoStartEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabled">CdnEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfile">CdnProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProvider">CdnProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNames">CustomHostNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSeconds">MaxCacheAgeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnits">ScaleUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessControl`<sup>Required</sup> <a name="AccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControl"></a>

```go
func AccessControl() MediaStreamingEndpointAccessControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference">MediaStreamingEndpointAccessControlOutputReference</a>

---

##### `CrossSiteAccessPolicy`<sup>Required</sup> <a name="CrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicy"></a>

```go
func CrossSiteAccessPolicy() MediaStreamingEndpointCrossSiteAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference">MediaStreamingEndpointCrossSiteAccessPolicyOutputReference</a>

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.sku"></a>

```go
func Sku() MediaStreamingEndpointSkuList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList">MediaStreamingEndpointSkuList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeouts"></a>

```go
func Timeouts() MediaStreamingEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference">MediaStreamingEndpointTimeoutsOutputReference</a>

---

##### `AccessControlInput`<sup>Optional</sup> <a name="AccessControlInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControlInput"></a>

```go
func AccessControlInput() MediaStreamingEndpointAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---

##### `AutoStartEnabledInput`<sup>Optional</sup> <a name="AutoStartEnabledInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabledInput"></a>

```go
func AutoStartEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CdnEnabledInput`<sup>Optional</sup> <a name="CdnEnabledInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabledInput"></a>

```go
func CdnEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CdnProfileInput`<sup>Optional</sup> <a name="CdnProfileInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfileInput"></a>

```go
func CdnProfileInput() *string
```

- *Type:* *string

---

##### `CdnProviderInput`<sup>Optional</sup> <a name="CdnProviderInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProviderInput"></a>

```go
func CdnProviderInput() *string
```

- *Type:* *string

---

##### `CrossSiteAccessPolicyInput`<sup>Optional</sup> <a name="CrossSiteAccessPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicyInput"></a>

```go
func CrossSiteAccessPolicyInput() MediaStreamingEndpointCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---

##### `CustomHostNamesInput`<sup>Optional</sup> <a name="CustomHostNamesInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNamesInput"></a>

```go
func CustomHostNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxCacheAgeSecondsInput`<sup>Optional</sup> <a name="MaxCacheAgeSecondsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSecondsInput"></a>

```go
func MaxCacheAgeSecondsInput() *f64
```

- *Type:* *f64

---

##### `MediaServicesAccountNameInput`<sup>Optional</sup> <a name="MediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountNameInput"></a>

```go
func MediaServicesAccountNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ScaleUnitsInput`<sup>Optional</sup> <a name="ScaleUnitsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnitsInput"></a>

```go
func ScaleUnitsInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoStartEnabled`<sup>Required</sup> <a name="AutoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabled"></a>

```go
func AutoStartEnabled() interface{}
```

- *Type:* interface{}

---

##### `CdnEnabled`<sup>Required</sup> <a name="CdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabled"></a>

```go
func CdnEnabled() interface{}
```

- *Type:* interface{}

---

##### `CdnProfile`<sup>Required</sup> <a name="CdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfile"></a>

```go
func CdnProfile() *string
```

- *Type:* *string

---

##### `CdnProvider`<sup>Required</sup> <a name="CdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProvider"></a>

```go
func CdnProvider() *string
```

- *Type:* *string

---

##### `CustomHostNames`<sup>Required</sup> <a name="CustomHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNames"></a>

```go
func CustomHostNames() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxCacheAgeSeconds`<sup>Required</sup> <a name="MaxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSeconds"></a>

```go
func MaxCacheAgeSeconds() *f64
```

- *Type:* *f64

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountName"></a>

```go
func MediaServicesAccountName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ScaleUnits`<sup>Required</sup> <a name="ScaleUnits" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnits"></a>

```go
func ScaleUnits() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingEndpointAccessControl <a name="MediaStreamingEndpointAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

&mediastreamingendpoint.MediaStreamingEndpointAccessControl {
	AkamaiSignatureHeaderAuthenticationKey: interface{},
	IpAllow: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.akamaiSignatureHeaderAuthenticationKey">AkamaiSignatureHeaderAuthenticationKey</a></code> | <code>interface{}</code> | akamai_signature_header_authentication_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.ipAllow">IpAllow</a></code> | <code>interface{}</code> | ip_allow block. |

---

##### `AkamaiSignatureHeaderAuthenticationKey`<sup>Optional</sup> <a name="AkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.akamaiSignatureHeaderAuthenticationKey"></a>

```go
AkamaiSignatureHeaderAuthenticationKey interface{}
```

- *Type:* interface{}

akamai_signature_header_authentication_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#akamai_signature_header_authentication_key MediaStreamingEndpoint#akamai_signature_header_authentication_key}

---

##### `IpAllow`<sup>Optional</sup> <a name="IpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.ipAllow"></a>

```go
IpAllow interface{}
```

- *Type:* interface{}

ip_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#ip_allow MediaStreamingEndpoint#ip_allow}

---

### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

&mediastreamingendpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey {
	Base64Key: *string,
	Expiration: *string,
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.base64Key">Base64Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#base64_key MediaStreamingEndpoint#base64_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.expiration">Expiration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#expiration MediaStreamingEndpoint#expiration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#identifier MediaStreamingEndpoint#identifier}. |

---

##### `Base64Key`<sup>Optional</sup> <a name="Base64Key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.base64Key"></a>

```go
Base64Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#base64_key MediaStreamingEndpoint#base64_key}.

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.expiration"></a>

```go
Expiration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#expiration MediaStreamingEndpoint#expiration}.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#identifier MediaStreamingEndpoint#identifier}.

---

### MediaStreamingEndpointAccessControlIpAllow <a name="MediaStreamingEndpointAccessControlIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

&mediastreamingendpoint.MediaStreamingEndpointAccessControlIpAllow {
	Address: *string,
	Name: *string,
	SubnetPrefixLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#address MediaStreamingEndpoint#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#address MediaStreamingEndpoint#address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `SubnetPrefixLength`<sup>Optional</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.subnetPrefixLength"></a>

```go
SubnetPrefixLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}.

---

### MediaStreamingEndpointConfig <a name="MediaStreamingEndpointConfig" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

&mediastreamingendpoint.MediaStreamingEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MediaServicesAccountName: *string,
	Name: *string,
	ResourceGroupName: *string,
	ScaleUnits: *f64,
	AccessControl: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl,
	AutoStartEnabled: interface{},
	CdnEnabled: interface{},
	CdnProfile: *string,
	CdnProvider: *string,
	CrossSiteAccessPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy,
	CustomHostNames: *[]*string,
	Description: *string,
	Id: *string,
	MaxCacheAgeSeconds: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.scaleUnits">ScaleUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.autoStartEnabled">AutoStartEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnEnabled">CdnEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProfile">CdnProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProvider">CdnProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.crossSiteAccessPolicy">CrossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.customHostNames">CustomHostNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.maxCacheAgeSeconds">MaxCacheAgeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}.

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.mediaServicesAccountName"></a>

```go
MediaServicesAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}.

---

##### `ScaleUnits`<sup>Required</sup> <a name="ScaleUnits" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.scaleUnits"></a>

```go
ScaleUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}.

---

##### `AccessControl`<sup>Optional</sup> <a name="AccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.accessControl"></a>

```go
AccessControl MediaStreamingEndpointAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#access_control MediaStreamingEndpoint#access_control}

---

##### `AutoStartEnabled`<sup>Optional</sup> <a name="AutoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.autoStartEnabled"></a>

```go
AutoStartEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}.

---

##### `CdnEnabled`<sup>Optional</sup> <a name="CdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnEnabled"></a>

```go
CdnEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}.

---

##### `CdnProfile`<sup>Optional</sup> <a name="CdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProfile"></a>

```go
CdnProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}.

---

##### `CdnProvider`<sup>Optional</sup> <a name="CdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProvider"></a>

```go
CdnProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}.

---

##### `CrossSiteAccessPolicy`<sup>Optional</sup> <a name="CrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.crossSiteAccessPolicy"></a>

```go
CrossSiteAccessPolicy MediaStreamingEndpointCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#cross_site_access_policy MediaStreamingEndpoint#cross_site_access_policy}

---

##### `CustomHostNames`<sup>Optional</sup> <a name="CustomHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.customHostNames"></a>

```go
CustomHostNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxCacheAgeSeconds`<sup>Optional</sup> <a name="MaxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.maxCacheAgeSeconds"></a>

```go
MaxCacheAgeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.timeouts"></a>

```go
Timeouts MediaStreamingEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#timeouts MediaStreamingEndpoint#timeouts}

---

### MediaStreamingEndpointCrossSiteAccessPolicy <a name="MediaStreamingEndpointCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

&mediastreamingendpoint.MediaStreamingEndpointCrossSiteAccessPolicy {
	ClientAccessPolicy: *string,
	CrossDomainPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.clientAccessPolicy">ClientAccessPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.crossDomainPolicy">CrossDomainPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}. |

---

##### `ClientAccessPolicy`<sup>Optional</sup> <a name="ClientAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.clientAccessPolicy"></a>

```go
ClientAccessPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}.

---

##### `CrossDomainPolicy`<sup>Optional</sup> <a name="CrossDomainPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.crossDomainPolicy"></a>

```go
CrossDomainPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}.

---

### MediaStreamingEndpointSku <a name="MediaStreamingEndpointSku" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

&mediastreamingendpoint.MediaStreamingEndpointSku {

}
```


### MediaStreamingEndpointTimeouts <a name="MediaStreamingEndpointTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

&mediastreamingendpoint.MediaStreamingEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get"></a>

```go
func Get(index *f64) MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetBase64Key">ResetBase64Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase64Key` <a name="ResetBase64Key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetBase64Key"></a>

```go
func ResetBase64Key()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetIdentifier"></a>

```go
func ResetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64KeyInput">Base64KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64Key">Base64Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Base64KeyInput`<sup>Optional</sup> <a name="Base64KeyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64KeyInput"></a>

```go
func Base64KeyInput() *string
```

- *Type:* *string

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expirationInput"></a>

```go
func ExpirationInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `Base64Key`<sup>Required</sup> <a name="Base64Key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64Key"></a>

```go
func Base64Key() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaStreamingEndpointAccessControlIpAllowList <a name="MediaStreamingEndpointAccessControlIpAllowList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpointAccessControlIpAllowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaStreamingEndpointAccessControlIpAllowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get"></a>

```go
func Get(index *f64) MediaStreamingEndpointAccessControlIpAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaStreamingEndpointAccessControlIpAllowOutputReference <a name="MediaStreamingEndpointAccessControlIpAllowOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpointAccessControlIpAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaStreamingEndpointAccessControlIpAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetSubnetPrefixLength">ResetSubnetPrefixLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSubnetPrefixLength` <a name="ResetSubnetPrefixLength" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetSubnetPrefixLength"></a>

```go
func ResetSubnetPrefixLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLengthInput">SubnetPrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubnetPrefixLengthInput`<sup>Optional</sup> <a name="SubnetPrefixLengthInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLengthInput"></a>

```go
func SubnetPrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SubnetPrefixLength`<sup>Required</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLength"></a>

```go
func SubnetPrefixLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaStreamingEndpointAccessControlOutputReference <a name="MediaStreamingEndpointAccessControlOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpointAccessControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaStreamingEndpointAccessControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey">PutAkamaiSignatureHeaderAuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow">PutIpAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetAkamaiSignatureHeaderAuthenticationKey">ResetAkamaiSignatureHeaderAuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetIpAllow">ResetIpAllow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAkamaiSignatureHeaderAuthenticationKey` <a name="PutAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey"></a>

```go
func PutAkamaiSignatureHeaderAuthenticationKey(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIpAllow` <a name="PutIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow"></a>

```go
func PutIpAllow(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAkamaiSignatureHeaderAuthenticationKey` <a name="ResetAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetAkamaiSignatureHeaderAuthenticationKey"></a>

```go
func ResetAkamaiSignatureHeaderAuthenticationKey()
```

##### `ResetIpAllow` <a name="ResetIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetIpAllow"></a>

```go
func ResetIpAllow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKey">AkamaiSignatureHeaderAuthenticationKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllow">IpAllow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList">MediaStreamingEndpointAccessControlIpAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKeyInput">AkamaiSignatureHeaderAuthenticationKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllowInput">IpAllowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AkamaiSignatureHeaderAuthenticationKey`<sup>Required</sup> <a name="AkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKey"></a>

```go
func AkamaiSignatureHeaderAuthenticationKey() MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList</a>

---

##### `IpAllow`<sup>Required</sup> <a name="IpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllow"></a>

```go
func IpAllow() MediaStreamingEndpointAccessControlIpAllowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList">MediaStreamingEndpointAccessControlIpAllowList</a>

---

##### `AkamaiSignatureHeaderAuthenticationKeyInput`<sup>Optional</sup> <a name="AkamaiSignatureHeaderAuthenticationKeyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKeyInput"></a>

```go
func AkamaiSignatureHeaderAuthenticationKeyInput() interface{}
```

- *Type:* interface{}

---

##### `IpAllowInput`<sup>Optional</sup> <a name="IpAllowInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllowInput"></a>

```go
func IpAllowInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaStreamingEndpointAccessControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---


### MediaStreamingEndpointCrossSiteAccessPolicyOutputReference <a name="MediaStreamingEndpointCrossSiteAccessPolicyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpointCrossSiteAccessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaStreamingEndpointCrossSiteAccessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy">ResetClientAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy">ResetCrossDomainPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientAccessPolicy` <a name="ResetClientAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy"></a>

```go
func ResetClientAccessPolicy()
```

##### `ResetCrossDomainPolicy` <a name="ResetCrossDomainPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy"></a>

```go
func ResetCrossDomainPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput">ClientAccessPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput">CrossDomainPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy">ClientAccessPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy">CrossDomainPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAccessPolicyInput`<sup>Optional</sup> <a name="ClientAccessPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput"></a>

```go
func ClientAccessPolicyInput() *string
```

- *Type:* *string

---

##### `CrossDomainPolicyInput`<sup>Optional</sup> <a name="CrossDomainPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput"></a>

```go
func CrossDomainPolicyInput() *string
```

- *Type:* *string

---

##### `ClientAccessPolicy`<sup>Required</sup> <a name="ClientAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy"></a>

```go
func ClientAccessPolicy() *string
```

- *Type:* *string

---

##### `CrossDomainPolicy`<sup>Required</sup> <a name="CrossDomainPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy"></a>

```go
func CrossDomainPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaStreamingEndpointCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---


### MediaStreamingEndpointSkuList <a name="MediaStreamingEndpointSkuList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpointSkuList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaStreamingEndpointSkuList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get"></a>

```go
func Get(index *f64) MediaStreamingEndpointSkuOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MediaStreamingEndpointSkuOutputReference <a name="MediaStreamingEndpointSkuOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpointSkuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaStreamingEndpointSkuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku">MediaStreamingEndpointSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaStreamingEndpointSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku">MediaStreamingEndpointSku</a>

---


### MediaStreamingEndpointTimeoutsOutputReference <a name="MediaStreamingEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/mediastreamingendpoint"

mediastreamingendpoint.NewMediaStreamingEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaStreamingEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




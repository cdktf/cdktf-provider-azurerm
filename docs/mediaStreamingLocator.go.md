# `azurerm_media_streaming_locator`

Refer to the Terraform Registory for docs: [`azurerm_media_streaming_locator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator).

# `mediaStreamingLocator` Submodule <a name="`mediaStreamingLocator` Submodule" id="@cdktf/provider-azurerm.mediaStreamingLocator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingLocator <a name="MediaStreamingLocator" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator azurerm_media_streaming_locator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

mediastreaminglocator.NewMediaStreamingLocator(scope Construct, id *string, config MediaStreamingLocatorConfig) MediaStreamingLocator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig">MediaStreamingLocatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig">MediaStreamingLocatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putContentKey">PutContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetAlternativeMediaId">ResetAlternativeMediaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetContentKey">ResetContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetDefaultContentKeyPolicyName">ResetDefaultContentKeyPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetFilterNames">ResetFilterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStreamingLocatorId">ResetStreamingLocatorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutContentKey` <a name="PutContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putContentKey"></a>

```go
func PutContentKey(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putContentKey.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putTimeouts"></a>

```go
func PutTimeouts(value MediaStreamingLocatorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a>

---

##### `ResetAlternativeMediaId` <a name="ResetAlternativeMediaId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetAlternativeMediaId"></a>

```go
func ResetAlternativeMediaId()
```

##### `ResetContentKey` <a name="ResetContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetContentKey"></a>

```go
func ResetContentKey()
```

##### `ResetDefaultContentKeyPolicyName` <a name="ResetDefaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetDefaultContentKeyPolicyName"></a>

```go
func ResetDefaultContentKeyPolicyName()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetFilterNames` <a name="ResetFilterNames" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetFilterNames"></a>

```go
func ResetFilterNames()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetId"></a>

```go
func ResetId()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetStreamingLocatorId` <a name="ResetStreamingLocatorId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStreamingLocatorId"></a>

```go
func ResetStreamingLocatorId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

mediastreaminglocator.MediaStreamingLocator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

mediastreaminglocator.MediaStreamingLocator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

mediastreaminglocator.MediaStreamingLocator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKey">ContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList">MediaStreamingLocatorContentKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference">MediaStreamingLocatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaIdInput">AlternativeMediaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetNameInput">AssetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKeyInput">ContentKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyNameInput">DefaultContentKeyPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNamesInput">FilterNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountNameInput">MediaServicesAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorIdInput">StreamingLocatorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyNameInput">StreamingPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaId">AlternativeMediaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetName">AssetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyName">DefaultContentKeyPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNames">FilterNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorId">StreamingLocatorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyName">StreamingPolicyName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentKey`<sup>Required</sup> <a name="ContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKey"></a>

```go
func ContentKey() MediaStreamingLocatorContentKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList">MediaStreamingLocatorContentKeyList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeouts"></a>

```go
func Timeouts() MediaStreamingLocatorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference">MediaStreamingLocatorTimeoutsOutputReference</a>

---

##### `AlternativeMediaIdInput`<sup>Optional</sup> <a name="AlternativeMediaIdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaIdInput"></a>

```go
func AlternativeMediaIdInput() *string
```

- *Type:* *string

---

##### `AssetNameInput`<sup>Optional</sup> <a name="AssetNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetNameInput"></a>

```go
func AssetNameInput() *string
```

- *Type:* *string

---

##### `ContentKeyInput`<sup>Optional</sup> <a name="ContentKeyInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKeyInput"></a>

```go
func ContentKeyInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultContentKeyPolicyNameInput`<sup>Optional</sup> <a name="DefaultContentKeyPolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyNameInput"></a>

```go
func DefaultContentKeyPolicyNameInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `FilterNamesInput`<sup>Optional</sup> <a name="FilterNamesInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNamesInput"></a>

```go
func FilterNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MediaServicesAccountNameInput`<sup>Optional</sup> <a name="MediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountNameInput"></a>

```go
func MediaServicesAccountNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `StreamingLocatorIdInput`<sup>Optional</sup> <a name="StreamingLocatorIdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorIdInput"></a>

```go
func StreamingLocatorIdInput() *string
```

- *Type:* *string

---

##### `StreamingPolicyNameInput`<sup>Optional</sup> <a name="StreamingPolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyNameInput"></a>

```go
func StreamingPolicyNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AlternativeMediaId`<sup>Required</sup> <a name="AlternativeMediaId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaId"></a>

```go
func AlternativeMediaId() *string
```

- *Type:* *string

---

##### `AssetName`<sup>Required</sup> <a name="AssetName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetName"></a>

```go
func AssetName() *string
```

- *Type:* *string

---

##### `DefaultContentKeyPolicyName`<sup>Required</sup> <a name="DefaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyName"></a>

```go
func DefaultContentKeyPolicyName() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `FilterNames`<sup>Required</sup> <a name="FilterNames" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNames"></a>

```go
func FilterNames() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountName"></a>

```go
func MediaServicesAccountName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `StreamingLocatorId`<sup>Required</sup> <a name="StreamingLocatorId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorId"></a>

```go
func StreamingLocatorId() *string
```

- *Type:* *string

---

##### `StreamingPolicyName`<sup>Required</sup> <a name="StreamingPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyName"></a>

```go
func StreamingPolicyName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingLocatorConfig <a name="MediaStreamingLocatorConfig" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

&mediastreaminglocator.MediaStreamingLocatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssetName: *string,
	MediaServicesAccountName: *string,
	Name: *string,
	ResourceGroupName: *string,
	StreamingPolicyName: *string,
	AlternativeMediaId: *string,
	ContentKey: interface{},
	DefaultContentKeyPolicyName: *string,
	EndTime: *string,
	FilterNames: *[]*string,
	Id: *string,
	StartTime: *string,
	StreamingLocatorId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.assetName">AssetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#asset_name MediaStreamingLocator#asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#media_services_account_name MediaStreamingLocator#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#name MediaStreamingLocator#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#resource_group_name MediaStreamingLocator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingPolicyName">StreamingPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#streaming_policy_name MediaStreamingLocator#streaming_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.alternativeMediaId">AlternativeMediaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#alternative_media_id MediaStreamingLocator#alternative_media_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.contentKey">ContentKey</a></code> | <code>interface{}</code> | content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.defaultContentKeyPolicyName">DefaultContentKeyPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#default_content_key_policy_name MediaStreamingLocator#default_content_key_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#end_time MediaStreamingLocator#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.filterNames">FilterNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#filter_names MediaStreamingLocator#filter_names}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#id MediaStreamingLocator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#start_time MediaStreamingLocator#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingLocatorId">StreamingLocatorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#streaming_locator_id MediaStreamingLocator#streaming_locator_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetName`<sup>Required</sup> <a name="AssetName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.assetName"></a>

```go
AssetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#asset_name MediaStreamingLocator#asset_name}.

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.mediaServicesAccountName"></a>

```go
MediaServicesAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#media_services_account_name MediaStreamingLocator#media_services_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#name MediaStreamingLocator#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#resource_group_name MediaStreamingLocator#resource_group_name}.

---

##### `StreamingPolicyName`<sup>Required</sup> <a name="StreamingPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingPolicyName"></a>

```go
StreamingPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#streaming_policy_name MediaStreamingLocator#streaming_policy_name}.

---

##### `AlternativeMediaId`<sup>Optional</sup> <a name="AlternativeMediaId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.alternativeMediaId"></a>

```go
AlternativeMediaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#alternative_media_id MediaStreamingLocator#alternative_media_id}.

---

##### `ContentKey`<sup>Optional</sup> <a name="ContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.contentKey"></a>

```go
ContentKey interface{}
```

- *Type:* interface{}

content_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#content_key MediaStreamingLocator#content_key}

---

##### `DefaultContentKeyPolicyName`<sup>Optional</sup> <a name="DefaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.defaultContentKeyPolicyName"></a>

```go
DefaultContentKeyPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#default_content_key_policy_name MediaStreamingLocator#default_content_key_policy_name}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#end_time MediaStreamingLocator#end_time}.

---

##### `FilterNames`<sup>Optional</sup> <a name="FilterNames" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.filterNames"></a>

```go
FilterNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#filter_names MediaStreamingLocator#filter_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#id MediaStreamingLocator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#start_time MediaStreamingLocator#start_time}.

---

##### `StreamingLocatorId`<sup>Optional</sup> <a name="StreamingLocatorId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingLocatorId"></a>

```go
StreamingLocatorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#streaming_locator_id MediaStreamingLocator#streaming_locator_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.timeouts"></a>

```go
Timeouts MediaStreamingLocatorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#timeouts MediaStreamingLocator#timeouts}

---

### MediaStreamingLocatorContentKey <a name="MediaStreamingLocatorContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

&mediastreaminglocator.MediaStreamingLocatorContentKey {
	ContentKeyId: *string,
	LabelReferenceInStreamingPolicy: *string,
	PolicyName: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.contentKeyId">ContentKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#content_key_id MediaStreamingLocator#content_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.labelReferenceInStreamingPolicy">LabelReferenceInStreamingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#label_reference_in_streaming_policy MediaStreamingLocator#label_reference_in_streaming_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.policyName">PolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#policy_name MediaStreamingLocator#policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#type MediaStreamingLocator#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#value MediaStreamingLocator#value}. |

---

##### `ContentKeyId`<sup>Optional</sup> <a name="ContentKeyId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.contentKeyId"></a>

```go
ContentKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#content_key_id MediaStreamingLocator#content_key_id}.

---

##### `LabelReferenceInStreamingPolicy`<sup>Optional</sup> <a name="LabelReferenceInStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.labelReferenceInStreamingPolicy"></a>

```go
LabelReferenceInStreamingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#label_reference_in_streaming_policy MediaStreamingLocator#label_reference_in_streaming_policy}.

---

##### `PolicyName`<sup>Optional</sup> <a name="PolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.policyName"></a>

```go
PolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#policy_name MediaStreamingLocator#policy_name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#type MediaStreamingLocator#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#value MediaStreamingLocator#value}.

---

### MediaStreamingLocatorTimeouts <a name="MediaStreamingLocatorTimeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

&mediastreaminglocator.MediaStreamingLocatorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#create MediaStreamingLocator#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#delete MediaStreamingLocator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#read MediaStreamingLocator#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#create MediaStreamingLocator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#delete MediaStreamingLocator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/media_streaming_locator#read MediaStreamingLocator#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingLocatorContentKeyList <a name="MediaStreamingLocatorContentKeyList" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

mediastreaminglocator.NewMediaStreamingLocatorContentKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaStreamingLocatorContentKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.get"></a>

```go
func Get(index *f64) MediaStreamingLocatorContentKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaStreamingLocatorContentKeyOutputReference <a name="MediaStreamingLocatorContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

mediastreaminglocator.NewMediaStreamingLocatorContentKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaStreamingLocatorContentKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetContentKeyId">ResetContentKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetLabelReferenceInStreamingPolicy">ResetLabelReferenceInStreamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetPolicyName">ResetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentKeyId` <a name="ResetContentKeyId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetContentKeyId"></a>

```go
func ResetContentKeyId()
```

##### `ResetLabelReferenceInStreamingPolicy` <a name="ResetLabelReferenceInStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetLabelReferenceInStreamingPolicy"></a>

```go
func ResetLabelReferenceInStreamingPolicy()
```

##### `ResetPolicyName` <a name="ResetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetPolicyName"></a>

```go
func ResetPolicyName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyIdInput">ContentKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicyInput">LabelReferenceInStreamingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyId">ContentKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicy">LabelReferenceInStreamingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentKeyIdInput`<sup>Optional</sup> <a name="ContentKeyIdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyIdInput"></a>

```go
func ContentKeyIdInput() *string
```

- *Type:* *string

---

##### `LabelReferenceInStreamingPolicyInput`<sup>Optional</sup> <a name="LabelReferenceInStreamingPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicyInput"></a>

```go
func LabelReferenceInStreamingPolicyInput() *string
```

- *Type:* *string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyNameInput"></a>

```go
func PolicyNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ContentKeyId`<sup>Required</sup> <a name="ContentKeyId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyId"></a>

```go
func ContentKeyId() *string
```

- *Type:* *string

---

##### `LabelReferenceInStreamingPolicy`<sup>Required</sup> <a name="LabelReferenceInStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicy"></a>

```go
func LabelReferenceInStreamingPolicy() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaStreamingLocatorTimeoutsOutputReference <a name="MediaStreamingLocatorTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mediastreaminglocator"

mediastreaminglocator.NewMediaStreamingLocatorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaStreamingLocatorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




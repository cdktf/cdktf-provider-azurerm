# `mediaTransform` Submodule <a name="`mediaTransform` Submodule" id="@cdktf/provider-azurerm.mediaTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaTransform <a name="MediaTransform" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform azurerm_media_transform}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.NewMediaTransform(scope Construct, id *string, config MediaTransformConfig) MediaTransform
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig">MediaTransformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig">MediaTransformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putOutput"></a>

```go
func PutOutput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putOutput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts"></a>

```go
func PutTimeouts(value MediaTransformTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetId"></a>

```go
func ResetId()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetOutput"></a>

```go
func ResetOutput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.MediaTransform_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.MediaTransform_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.MediaTransform_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.output">Output</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList">MediaTransformOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference">MediaTransformTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountNameInput">MediaServicesAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.outputInput">OutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.output"></a>

```go
func Output() MediaTransformOutputList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList">MediaTransformOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeouts"></a>

```go
func Timeouts() MediaTransformTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference">MediaTransformTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MediaServicesAccountNameInput`<sup>Optional</sup> <a name="MediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountNameInput"></a>

```go
func MediaServicesAccountNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.outputInput"></a>

```go
func OutputInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.mediaServicesAccountName"></a>

```go
func MediaServicesAccountName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransform.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaTransformConfig <a name="MediaTransformConfig" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

&mediatransform.MediaTransformConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MediaServicesAccountName: *string,
	Name: *string,
	ResourceGroupName: *string,
	Description: *string,
	Id: *string,
	Output: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5.mediaTransform.MediaTransformTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#media_services_account_name MediaTransform#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#name MediaTransform#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#resource_group_name MediaTransform#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#description MediaTransform#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#id MediaTransform#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.output">Output</a></code> | <code>interface{}</code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.mediaServicesAccountName"></a>

```go
MediaServicesAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#media_services_account_name MediaTransform#media_services_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#name MediaTransform#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#resource_group_name MediaTransform#resource_group_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#description MediaTransform#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#id MediaTransform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.output"></a>

```go
Output interface{}
```

- *Type:* interface{}

output block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#output MediaTransform#output}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformConfig.property.timeouts"></a>

```go
Timeouts MediaTransformTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts">MediaTransformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#timeouts MediaTransform#timeouts}

---

### MediaTransformOutput <a name="MediaTransformOutput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

&mediatransform.MediaTransformOutput {
	AudioAnalyzerPreset: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5.mediaTransform.MediaTransformOutputAudioAnalyzerPreset,
	BuiltinPreset: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5.mediaTransform.MediaTransformOutputBuiltinPreset,
	FaceDetectorPreset: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5.mediaTransform.MediaTransformOutputFaceDetectorPreset,
	OnErrorAction: *string,
	RelativePriority: *string,
	VideoAnalyzerPreset: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5.mediaTransform.MediaTransformOutputVideoAnalyzerPreset,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.audioAnalyzerPreset">AudioAnalyzerPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a></code> | audio_analyzer_preset block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.builtinPreset">BuiltinPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a></code> | builtin_preset block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.faceDetectorPreset">FaceDetectorPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a></code> | face_detector_preset block. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.onErrorAction">OnErrorAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#on_error_action MediaTransform#on_error_action}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.relativePriority">RelativePriority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#relative_priority MediaTransform#relative_priority}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.videoAnalyzerPreset">VideoAnalyzerPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a></code> | video_analyzer_preset block. |

---

##### `AudioAnalyzerPreset`<sup>Optional</sup> <a name="AudioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.audioAnalyzerPreset"></a>

```go
AudioAnalyzerPreset MediaTransformOutputAudioAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

audio_analyzer_preset block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_analyzer_preset MediaTransform#audio_analyzer_preset}

---

##### `BuiltinPreset`<sup>Optional</sup> <a name="BuiltinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.builtinPreset"></a>

```go
BuiltinPreset MediaTransformOutputBuiltinPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

builtin_preset block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#builtin_preset MediaTransform#builtin_preset}

---

##### `FaceDetectorPreset`<sup>Optional</sup> <a name="FaceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.faceDetectorPreset"></a>

```go
FaceDetectorPreset MediaTransformOutputFaceDetectorPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

face_detector_preset block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#face_detector_preset MediaTransform#face_detector_preset}

---

##### `OnErrorAction`<sup>Optional</sup> <a name="OnErrorAction" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.onErrorAction"></a>

```go
OnErrorAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#on_error_action MediaTransform#on_error_action}.

---

##### `RelativePriority`<sup>Optional</sup> <a name="RelativePriority" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.relativePriority"></a>

```go
RelativePriority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#relative_priority MediaTransform#relative_priority}.

---

##### `VideoAnalyzerPreset`<sup>Optional</sup> <a name="VideoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutput.property.videoAnalyzerPreset"></a>

```go
VideoAnalyzerPreset MediaTransformOutputVideoAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

video_analyzer_preset block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#video_analyzer_preset MediaTransform#video_analyzer_preset}

---

### MediaTransformOutputAudioAnalyzerPreset <a name="MediaTransformOutputAudioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

&mediatransform.MediaTransformOutputAudioAnalyzerPreset {
	AudioAnalysisMode: *string,
	AudioLanguage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioAnalysisMode">AudioAnalysisMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioLanguage">AudioLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_language MediaTransform#audio_language}. |

---

##### `AudioAnalysisMode`<sup>Optional</sup> <a name="AudioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioAnalysisMode"></a>

```go
AudioAnalysisMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}.

---

##### `AudioLanguage`<sup>Optional</sup> <a name="AudioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset.property.audioLanguage"></a>

```go
AudioLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_language MediaTransform#audio_language}.

---

### MediaTransformOutputBuiltinPreset <a name="MediaTransformOutputBuiltinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

&mediatransform.MediaTransformOutputBuiltinPreset {
	PresetName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset.property.presetName">PresetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#preset_name MediaTransform#preset_name}. |

---

##### `PresetName`<sup>Required</sup> <a name="PresetName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset.property.presetName"></a>

```go
PresetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#preset_name MediaTransform#preset_name}.

---

### MediaTransformOutputFaceDetectorPreset <a name="MediaTransformOutputFaceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

&mediatransform.MediaTransformOutputFaceDetectorPreset {
	AnalysisResolution: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset.property.analysisResolution">AnalysisResolution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#analysis_resolution MediaTransform#analysis_resolution}. |

---

##### `AnalysisResolution`<sup>Optional</sup> <a name="AnalysisResolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset.property.analysisResolution"></a>

```go
AnalysisResolution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#analysis_resolution MediaTransform#analysis_resolution}.

---

### MediaTransformOutputVideoAnalyzerPreset <a name="MediaTransformOutputVideoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

&mediatransform.MediaTransformOutputVideoAnalyzerPreset {
	AudioAnalysisMode: *string,
	AudioLanguage: *string,
	InsightsType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioAnalysisMode">AudioAnalysisMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioLanguage">AudioLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_language MediaTransform#audio_language}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.insightsType">InsightsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#insights_type MediaTransform#insights_type}. |

---

##### `AudioAnalysisMode`<sup>Optional</sup> <a name="AudioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioAnalysisMode"></a>

```go
AudioAnalysisMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_analysis_mode MediaTransform#audio_analysis_mode}.

---

##### `AudioLanguage`<sup>Optional</sup> <a name="AudioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.audioLanguage"></a>

```go
AudioLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#audio_language MediaTransform#audio_language}.

---

##### `InsightsType`<sup>Optional</sup> <a name="InsightsType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset.property.insightsType"></a>

```go
InsightsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#insights_type MediaTransform#insights_type}.

---

### MediaTransformTimeouts <a name="MediaTransformTimeouts" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

&mediatransform.MediaTransformTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#create MediaTransform#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#delete MediaTransform#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#read MediaTransform#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#update MediaTransform#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#create MediaTransform#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#delete MediaTransform#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#read MediaTransform#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_transform#update MediaTransform#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaTransformOutputAudioAnalyzerPresetOutputReference <a name="MediaTransformOutputAudioAnalyzerPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.NewMediaTransformOutputAudioAnalyzerPresetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaTransformOutputAudioAnalyzerPresetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioAnalysisMode">ResetAudioAnalysisMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioLanguage">ResetAudioLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioAnalysisMode` <a name="ResetAudioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioAnalysisMode"></a>

```go
func ResetAudioAnalysisMode()
```

##### `ResetAudioLanguage` <a name="ResetAudioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.resetAudioLanguage"></a>

```go
func ResetAudioLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisModeInput">AudioAnalysisModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguageInput">AudioLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisMode">AudioAnalysisMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguage">AudioLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioAnalysisModeInput`<sup>Optional</sup> <a name="AudioAnalysisModeInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisModeInput"></a>

```go
func AudioAnalysisModeInput() *string
```

- *Type:* *string

---

##### `AudioLanguageInput`<sup>Optional</sup> <a name="AudioLanguageInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguageInput"></a>

```go
func AudioLanguageInput() *string
```

- *Type:* *string

---

##### `AudioAnalysisMode`<sup>Required</sup> <a name="AudioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioAnalysisMode"></a>

```go
func AudioAnalysisMode() *string
```

- *Type:* *string

---

##### `AudioLanguage`<sup>Required</sup> <a name="AudioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.audioLanguage"></a>

```go
func AudioLanguage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaTransformOutputAudioAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

---


### MediaTransformOutputBuiltinPresetOutputReference <a name="MediaTransformOutputBuiltinPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.NewMediaTransformOutputBuiltinPresetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaTransformOutputBuiltinPresetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetNameInput">PresetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetName">PresetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PresetNameInput`<sup>Optional</sup> <a name="PresetNameInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetNameInput"></a>

```go
func PresetNameInput() *string
```

- *Type:* *string

---

##### `PresetName`<sup>Required</sup> <a name="PresetName" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.presetName"></a>

```go
func PresetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaTransformOutputBuiltinPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

---


### MediaTransformOutputFaceDetectorPresetOutputReference <a name="MediaTransformOutputFaceDetectorPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.NewMediaTransformOutputFaceDetectorPresetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaTransformOutputFaceDetectorPresetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resetAnalysisResolution">ResetAnalysisResolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalysisResolution` <a name="ResetAnalysisResolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.resetAnalysisResolution"></a>

```go
func ResetAnalysisResolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolutionInput">AnalysisResolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolution">AnalysisResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnalysisResolutionInput`<sup>Optional</sup> <a name="AnalysisResolutionInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolutionInput"></a>

```go
func AnalysisResolutionInput() *string
```

- *Type:* *string

---

##### `AnalysisResolution`<sup>Required</sup> <a name="AnalysisResolution" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.analysisResolution"></a>

```go
func AnalysisResolution() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaTransformOutputFaceDetectorPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

---


### MediaTransformOutputList <a name="MediaTransformOutputList" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.NewMediaTransformOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaTransformOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.get"></a>

```go
func Get(index *f64) MediaTransformOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaTransformOutputOutputReference <a name="MediaTransformOutputOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.NewMediaTransformOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaTransformOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset">PutAudioAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putBuiltinPreset">PutBuiltinPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putFaceDetectorPreset">PutFaceDetectorPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset">PutVideoAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetAudioAnalyzerPreset">ResetAudioAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetBuiltinPreset">ResetBuiltinPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetFaceDetectorPreset">ResetFaceDetectorPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetOnErrorAction">ResetOnErrorAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetRelativePriority">ResetRelativePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetVideoAnalyzerPreset">ResetVideoAnalyzerPreset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioAnalyzerPreset` <a name="PutAudioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset"></a>

```go
func PutAudioAnalyzerPreset(value MediaTransformOutputAudioAnalyzerPreset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putAudioAnalyzerPreset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

---

##### `PutBuiltinPreset` <a name="PutBuiltinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putBuiltinPreset"></a>

```go
func PutBuiltinPreset(value MediaTransformOutputBuiltinPreset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putBuiltinPreset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

---

##### `PutFaceDetectorPreset` <a name="PutFaceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putFaceDetectorPreset"></a>

```go
func PutFaceDetectorPreset(value MediaTransformOutputFaceDetectorPreset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putFaceDetectorPreset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

---

##### `PutVideoAnalyzerPreset` <a name="PutVideoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset"></a>

```go
func PutVideoAnalyzerPreset(value MediaTransformOutputVideoAnalyzerPreset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.putVideoAnalyzerPreset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

---

##### `ResetAudioAnalyzerPreset` <a name="ResetAudioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetAudioAnalyzerPreset"></a>

```go
func ResetAudioAnalyzerPreset()
```

##### `ResetBuiltinPreset` <a name="ResetBuiltinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetBuiltinPreset"></a>

```go
func ResetBuiltinPreset()
```

##### `ResetFaceDetectorPreset` <a name="ResetFaceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetFaceDetectorPreset"></a>

```go
func ResetFaceDetectorPreset()
```

##### `ResetOnErrorAction` <a name="ResetOnErrorAction" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetOnErrorAction"></a>

```go
func ResetOnErrorAction()
```

##### `ResetRelativePriority` <a name="ResetRelativePriority" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetRelativePriority"></a>

```go
func ResetRelativePriority()
```

##### `ResetVideoAnalyzerPreset` <a name="ResetVideoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.resetVideoAnalyzerPreset"></a>

```go
func ResetVideoAnalyzerPreset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPreset">AudioAnalyzerPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference">MediaTransformOutputAudioAnalyzerPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPreset">BuiltinPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference">MediaTransformOutputBuiltinPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPreset">FaceDetectorPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference">MediaTransformOutputFaceDetectorPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPreset">VideoAnalyzerPreset</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference">MediaTransformOutputVideoAnalyzerPresetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPresetInput">AudioAnalyzerPresetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPresetInput">BuiltinPresetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPresetInput">FaceDetectorPresetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorActionInput">OnErrorActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriorityInput">RelativePriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPresetInput">VideoAnalyzerPresetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorAction">OnErrorAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriority">RelativePriority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioAnalyzerPreset`<sup>Required</sup> <a name="AudioAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPreset"></a>

```go
func AudioAnalyzerPreset() MediaTransformOutputAudioAnalyzerPresetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPresetOutputReference">MediaTransformOutputAudioAnalyzerPresetOutputReference</a>

---

##### `BuiltinPreset`<sup>Required</sup> <a name="BuiltinPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPreset"></a>

```go
func BuiltinPreset() MediaTransformOutputBuiltinPresetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPresetOutputReference">MediaTransformOutputBuiltinPresetOutputReference</a>

---

##### `FaceDetectorPreset`<sup>Required</sup> <a name="FaceDetectorPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPreset"></a>

```go
func FaceDetectorPreset() MediaTransformOutputFaceDetectorPresetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPresetOutputReference">MediaTransformOutputFaceDetectorPresetOutputReference</a>

---

##### `VideoAnalyzerPreset`<sup>Required</sup> <a name="VideoAnalyzerPreset" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPreset"></a>

```go
func VideoAnalyzerPreset() MediaTransformOutputVideoAnalyzerPresetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference">MediaTransformOutputVideoAnalyzerPresetOutputReference</a>

---

##### `AudioAnalyzerPresetInput`<sup>Optional</sup> <a name="AudioAnalyzerPresetInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.audioAnalyzerPresetInput"></a>

```go
func AudioAnalyzerPresetInput() MediaTransformOutputAudioAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputAudioAnalyzerPreset">MediaTransformOutputAudioAnalyzerPreset</a>

---

##### `BuiltinPresetInput`<sup>Optional</sup> <a name="BuiltinPresetInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.builtinPresetInput"></a>

```go
func BuiltinPresetInput() MediaTransformOutputBuiltinPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputBuiltinPreset">MediaTransformOutputBuiltinPreset</a>

---

##### `FaceDetectorPresetInput`<sup>Optional</sup> <a name="FaceDetectorPresetInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.faceDetectorPresetInput"></a>

```go
func FaceDetectorPresetInput() MediaTransformOutputFaceDetectorPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputFaceDetectorPreset">MediaTransformOutputFaceDetectorPreset</a>

---

##### `OnErrorActionInput`<sup>Optional</sup> <a name="OnErrorActionInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorActionInput"></a>

```go
func OnErrorActionInput() *string
```

- *Type:* *string

---

##### `RelativePriorityInput`<sup>Optional</sup> <a name="RelativePriorityInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriorityInput"></a>

```go
func RelativePriorityInput() *string
```

- *Type:* *string

---

##### `VideoAnalyzerPresetInput`<sup>Optional</sup> <a name="VideoAnalyzerPresetInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.videoAnalyzerPresetInput"></a>

```go
func VideoAnalyzerPresetInput() MediaTransformOutputVideoAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

---

##### `OnErrorAction`<sup>Required</sup> <a name="OnErrorAction" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.onErrorAction"></a>

```go
func OnErrorAction() *string
```

- *Type:* *string

---

##### `RelativePriority`<sup>Required</sup> <a name="RelativePriority" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.relativePriority"></a>

```go
func RelativePriority() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaTransformOutputVideoAnalyzerPresetOutputReference <a name="MediaTransformOutputVideoAnalyzerPresetOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.NewMediaTransformOutputVideoAnalyzerPresetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaTransformOutputVideoAnalyzerPresetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioAnalysisMode">ResetAudioAnalysisMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioLanguage">ResetAudioLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetInsightsType">ResetInsightsType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioAnalysisMode` <a name="ResetAudioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioAnalysisMode"></a>

```go
func ResetAudioAnalysisMode()
```

##### `ResetAudioLanguage` <a name="ResetAudioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetAudioLanguage"></a>

```go
func ResetAudioLanguage()
```

##### `ResetInsightsType` <a name="ResetInsightsType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.resetInsightsType"></a>

```go
func ResetInsightsType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisModeInput">AudioAnalysisModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguageInput">AudioLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsTypeInput">InsightsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisMode">AudioAnalysisMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguage">AudioLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsType">InsightsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioAnalysisModeInput`<sup>Optional</sup> <a name="AudioAnalysisModeInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisModeInput"></a>

```go
func AudioAnalysisModeInput() *string
```

- *Type:* *string

---

##### `AudioLanguageInput`<sup>Optional</sup> <a name="AudioLanguageInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguageInput"></a>

```go
func AudioLanguageInput() *string
```

- *Type:* *string

---

##### `InsightsTypeInput`<sup>Optional</sup> <a name="InsightsTypeInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsTypeInput"></a>

```go
func InsightsTypeInput() *string
```

- *Type:* *string

---

##### `AudioAnalysisMode`<sup>Required</sup> <a name="AudioAnalysisMode" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioAnalysisMode"></a>

```go
func AudioAnalysisMode() *string
```

- *Type:* *string

---

##### `AudioLanguage`<sup>Required</sup> <a name="AudioLanguage" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.audioLanguage"></a>

```go
func AudioLanguage() *string
```

- *Type:* *string

---

##### `InsightsType`<sup>Required</sup> <a name="InsightsType" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.insightsType"></a>

```go
func InsightsType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPresetOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaTransformOutputVideoAnalyzerPreset
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformOutputVideoAnalyzerPreset">MediaTransformOutputVideoAnalyzerPreset</a>

---


### MediaTransformTimeoutsOutputReference <a name="MediaTransformTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v5/mediatransform"

mediatransform.NewMediaTransformTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaTransformTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaTransform.MediaTransformTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




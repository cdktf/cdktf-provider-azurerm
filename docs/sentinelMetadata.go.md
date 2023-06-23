# `azurerm_sentinel_metadata`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_metadata`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata).

# `sentinelMetadata` Submodule <a name="`sentinelMetadata` Submodule" id="@cdktf/provider-azurerm.sentinelMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelMetadata <a name="SentinelMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata azurerm_sentinel_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

sentinelmetadata.NewSentinelMetadata(scope Construct, id *string, config SentinelMetadataConfig) SentinelMetadata
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig">SentinelMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig">SentinelMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor">PutAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory">PutCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport">PutSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetAuthor">ResetAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetContentSchemaVersion">ResetContentSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCustomVersion">ResetCustomVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetDependency">ResetDependency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetFirstPublishDate">ResetFirstPublishDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetIconId">ResetIconId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetLastPublishDate">ResetLastPublishDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImages">ResetPreviewImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImagesDark">ResetPreviewImagesDark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetProviders">ResetProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSupport">ResetSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTactics">ResetThreatAnalysisTactics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTechniques">ResetThreatAnalysisTechniques</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuthor` <a name="PutAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor"></a>

```go
func PutAuthor(value SentinelMetadataAuthor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---

##### `PutCategory` <a name="PutCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory"></a>

```go
func PutCategory(value SentinelMetadataCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource"></a>

```go
func PutSource(value SentinelMetadataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---

##### `PutSupport` <a name="PutSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport"></a>

```go
func PutSupport(value SentinelMetadataSupport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts"></a>

```go
func PutTimeouts(value SentinelMetadataTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

---

##### `ResetAuthor` <a name="ResetAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetAuthor"></a>

```go
func ResetAuthor()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetContentSchemaVersion` <a name="ResetContentSchemaVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetContentSchemaVersion"></a>

```go
func ResetContentSchemaVersion()
```

##### `ResetCustomVersion` <a name="ResetCustomVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCustomVersion"></a>

```go
func ResetCustomVersion()
```

##### `ResetDependency` <a name="ResetDependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetDependency"></a>

```go
func ResetDependency()
```

##### `ResetFirstPublishDate` <a name="ResetFirstPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetFirstPublishDate"></a>

```go
func ResetFirstPublishDate()
```

##### `ResetIconId` <a name="ResetIconId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetIconId"></a>

```go
func ResetIconId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetId"></a>

```go
func ResetId()
```

##### `ResetLastPublishDate` <a name="ResetLastPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetLastPublishDate"></a>

```go
func ResetLastPublishDate()
```

##### `ResetPreviewImages` <a name="ResetPreviewImages" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImages"></a>

```go
func ResetPreviewImages()
```

##### `ResetPreviewImagesDark` <a name="ResetPreviewImagesDark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImagesDark"></a>

```go
func ResetPreviewImagesDark()
```

##### `ResetProviders` <a name="ResetProviders" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetProviders"></a>

```go
func ResetProviders()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSupport` <a name="ResetSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSupport"></a>

```go
func ResetSupport()
```

##### `ResetThreatAnalysisTactics` <a name="ResetThreatAnalysisTactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTactics"></a>

```go
func ResetThreatAnalysisTactics()
```

##### `ResetThreatAnalysisTechniques` <a name="ResetThreatAnalysisTechniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTechniques"></a>

```go
func ResetThreatAnalysisTechniques()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

sentinelmetadata.SentinelMetadata_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

sentinelmetadata.SentinelMetadata_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

sentinelmetadata.SentinelMetadata_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.author">Author</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference">SentinelMetadataAuthorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.category">Category</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference">SentinelMetadataCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference">SentinelMetadataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.support">Support</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference">SentinelMetadataSupportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference">SentinelMetadataTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.authorInput">AuthorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.categoryInput">CategoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentIdInput">ContentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersionInput">ContentSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersionInput">CustomVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependencyInput">DependencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDateInput">FirstPublishDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconIdInput">IconIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDateInput">LastPublishDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentIdInput">ParentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDarkInput">PreviewImagesDarkInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesInput">PreviewImagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providersInput">ProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.supportInput">SupportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTacticsInput">ThreatAnalysisTacticsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniquesInput">ThreatAnalysisTechniquesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentId">ContentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersion">ContentSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersion">CustomVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependency">Dependency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDate">FirstPublishDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconId">IconId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDate">LastPublishDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImages">PreviewImages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDark">PreviewImagesDark</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providers">Providers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTactics">ThreatAnalysisTactics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniques">ThreatAnalysisTechniques</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.author"></a>

```go
func Author() SentinelMetadataAuthorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference">SentinelMetadataAuthorOutputReference</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.category"></a>

```go
func Category() SentinelMetadataCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference">SentinelMetadataCategoryOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.source"></a>

```go
func Source() SentinelMetadataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference">SentinelMetadataSourceOutputReference</a>

---

##### `Support`<sup>Required</sup> <a name="Support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.support"></a>

```go
func Support() SentinelMetadataSupportOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference">SentinelMetadataSupportOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeouts"></a>

```go
func Timeouts() SentinelMetadataTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference">SentinelMetadataTimeoutsOutputReference</a>

---

##### `AuthorInput`<sup>Optional</sup> <a name="AuthorInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.authorInput"></a>

```go
func AuthorInput() SentinelMetadataAuthor
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.categoryInput"></a>

```go
func CategoryInput() SentinelMetadataCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---

##### `ContentIdInput`<sup>Optional</sup> <a name="ContentIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentIdInput"></a>

```go
func ContentIdInput() *string
```

- *Type:* *string

---

##### `ContentSchemaVersionInput`<sup>Optional</sup> <a name="ContentSchemaVersionInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersionInput"></a>

```go
func ContentSchemaVersionInput() *string
```

- *Type:* *string

---

##### `CustomVersionInput`<sup>Optional</sup> <a name="CustomVersionInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersionInput"></a>

```go
func CustomVersionInput() *string
```

- *Type:* *string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependencyInput"></a>

```go
func DependencyInput() *string
```

- *Type:* *string

---

##### `FirstPublishDateInput`<sup>Optional</sup> <a name="FirstPublishDateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDateInput"></a>

```go
func FirstPublishDateInput() *string
```

- *Type:* *string

---

##### `IconIdInput`<sup>Optional</sup> <a name="IconIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconIdInput"></a>

```go
func IconIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `LastPublishDateInput`<sup>Optional</sup> <a name="LastPublishDateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDateInput"></a>

```go
func LastPublishDateInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentIdInput"></a>

```go
func ParentIdInput() *string
```

- *Type:* *string

---

##### `PreviewImagesDarkInput`<sup>Optional</sup> <a name="PreviewImagesDarkInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDarkInput"></a>

```go
func PreviewImagesDarkInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreviewImagesInput`<sup>Optional</sup> <a name="PreviewImagesInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesInput"></a>

```go
func PreviewImagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProvidersInput`<sup>Optional</sup> <a name="ProvidersInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providersInput"></a>

```go
func ProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.sourceInput"></a>

```go
func SourceInput() SentinelMetadataSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---

##### `SupportInput`<sup>Optional</sup> <a name="SupportInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.supportInput"></a>

```go
func SupportInput() SentinelMetadataSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---

##### `ThreatAnalysisTacticsInput`<sup>Optional</sup> <a name="ThreatAnalysisTacticsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTacticsInput"></a>

```go
func ThreatAnalysisTacticsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ThreatAnalysisTechniquesInput`<sup>Optional</sup> <a name="ThreatAnalysisTechniquesInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniquesInput"></a>

```go
func ThreatAnalysisTechniquesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `ContentId`<sup>Required</sup> <a name="ContentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentId"></a>

```go
func ContentId() *string
```

- *Type:* *string

---

##### `ContentSchemaVersion`<sup>Required</sup> <a name="ContentSchemaVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersion"></a>

```go
func ContentSchemaVersion() *string
```

- *Type:* *string

---

##### `CustomVersion`<sup>Required</sup> <a name="CustomVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersion"></a>

```go
func CustomVersion() *string
```

- *Type:* *string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependency"></a>

```go
func Dependency() *string
```

- *Type:* *string

---

##### `FirstPublishDate`<sup>Required</sup> <a name="FirstPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDate"></a>

```go
func FirstPublishDate() *string
```

- *Type:* *string

---

##### `IconId`<sup>Required</sup> <a name="IconId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconId"></a>

```go
func IconId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LastPublishDate`<sup>Required</sup> <a name="LastPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDate"></a>

```go
func LastPublishDate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

##### `PreviewImages`<sup>Required</sup> <a name="PreviewImages" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImages"></a>

```go
func PreviewImages() *[]*string
```

- *Type:* *[]*string

---

##### `PreviewImagesDark`<sup>Required</sup> <a name="PreviewImagesDark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDark"></a>

```go
func PreviewImagesDark() *[]*string
```

- *Type:* *[]*string

---

##### `Providers`<sup>Required</sup> <a name="Providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providers"></a>

```go
func Providers() *[]*string
```

- *Type:* *[]*string

---

##### `ThreatAnalysisTactics`<sup>Required</sup> <a name="ThreatAnalysisTactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTactics"></a>

```go
func ThreatAnalysisTactics() *[]*string
```

- *Type:* *[]*string

---

##### `ThreatAnalysisTechniques`<sup>Required</sup> <a name="ThreatAnalysisTechniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniques"></a>

```go
func ThreatAnalysisTechniques() *[]*string
```

- *Type:* *[]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelMetadataAuthor <a name="SentinelMetadataAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

&sentinelmetadata.SentinelMetadataAuthor {
	Email: *string,
	Link: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataCategory <a name="SentinelMetadataCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

&sentinelmetadata.SentinelMetadataCategory {
	Domains: *[]*string,
	Verticals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.domains">Domains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.verticals">Verticals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}. |

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.domains"></a>

```go
Domains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}.

---

##### `Verticals`<sup>Optional</sup> <a name="Verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.verticals"></a>

```go
Verticals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}.

---

### SentinelMetadataConfig <a name="SentinelMetadataConfig" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

&sentinelmetadata.SentinelMetadataConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContentId: *string,
	Kind: *string,
	Name: *string,
	ParentId: *string,
	WorkspaceId: *string,
	Author: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.sentinelMetadata.SentinelMetadataAuthor,
	Category: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.sentinelMetadata.SentinelMetadataCategory,
	ContentSchemaVersion: *string,
	CustomVersion: *string,
	Dependency: *string,
	FirstPublishDate: *string,
	IconId: *string,
	Id: *string,
	LastPublishDate: *string,
	PreviewImages: *[]*string,
	PreviewImagesDark: *[]*string,
	Providers: *[]*string,
	Source: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.sentinelMetadata.SentinelMetadataSource,
	Support: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.sentinelMetadata.SentinelMetadataSupport,
	ThreatAnalysisTactics: *[]*string,
	ThreatAnalysisTechniques: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.sentinelMetadata.SentinelMetadataTimeouts,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentId">ContentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.parentId">ParentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.author">Author</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | author block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.category">Category</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | category block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentSchemaVersion">ContentSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.customVersion">CustomVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependency">Dependency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.firstPublishDate">FirstPublishDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.iconId">IconId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lastPublishDate">LastPublishDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImages">PreviewImages</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImagesDark">PreviewImagesDark</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.providers">Providers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.support">Support</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTactics">ThreatAnalysisTactics</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTechniques">ThreatAnalysisTechniques</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentId`<sup>Required</sup> <a name="ContentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentId"></a>

```go
ContentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}.

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.parentId"></a>

```go
ParentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}.

---

##### `Author`<sup>Optional</sup> <a name="Author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.author"></a>

```go
Author SentinelMetadataAuthor
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

author block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#author SentinelMetadata#author}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.category"></a>

```go
Category SentinelMetadataCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#category SentinelMetadata#category}

---

##### `ContentSchemaVersion`<sup>Optional</sup> <a name="ContentSchemaVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentSchemaVersion"></a>

```go
ContentSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}.

---

##### `CustomVersion`<sup>Optional</sup> <a name="CustomVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.customVersion"></a>

```go
CustomVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}.

---

##### `Dependency`<sup>Optional</sup> <a name="Dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependency"></a>

```go
Dependency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}.

---

##### `FirstPublishDate`<sup>Optional</sup> <a name="FirstPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.firstPublishDate"></a>

```go
FirstPublishDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}.

---

##### `IconId`<sup>Optional</sup> <a name="IconId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.iconId"></a>

```go
IconId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastPublishDate`<sup>Optional</sup> <a name="LastPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lastPublishDate"></a>

```go
LastPublishDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}.

---

##### `PreviewImages`<sup>Optional</sup> <a name="PreviewImages" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImages"></a>

```go
PreviewImages *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}.

---

##### `PreviewImagesDark`<sup>Optional</sup> <a name="PreviewImagesDark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImagesDark"></a>

```go
PreviewImagesDark *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}.

---

##### `Providers`<sup>Optional</sup> <a name="Providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.providers"></a>

```go
Providers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.source"></a>

```go
Source SentinelMetadataSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#source SentinelMetadata#source}

---

##### `Support`<sup>Optional</sup> <a name="Support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.support"></a>

```go
Support SentinelMetadataSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#support SentinelMetadata#support}

---

##### `ThreatAnalysisTactics`<sup>Optional</sup> <a name="ThreatAnalysisTactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTactics"></a>

```go
ThreatAnalysisTactics *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}.

---

##### `ThreatAnalysisTechniques`<sup>Optional</sup> <a name="ThreatAnalysisTechniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTechniques"></a>

```go
ThreatAnalysisTechniques *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.timeouts"></a>

```go
Timeouts SentinelMetadataTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#timeouts SentinelMetadata#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}.

---

### SentinelMetadataSource <a name="SentinelMetadataSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

&sentinelmetadata.SentinelMetadataSource {
	Kind: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataSupport <a name="SentinelMetadataSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

&sentinelmetadata.SentinelMetadataSupport {
	Tier: *string,
	Email: *string,
	Link: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.tier">Tier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataTimeouts <a name="SentinelMetadataTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

&sentinelmetadata.SentinelMetadataTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelMetadataAuthorOutputReference <a name="SentinelMetadataAuthorOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

sentinelmetadata.NewSentinelMetadataAuthorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelMetadataAuthorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetLink` <a name="ResetLink" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetLink"></a>

```go
func ResetLink()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelMetadataAuthor
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---


### SentinelMetadataCategoryOutputReference <a name="SentinelMetadataCategoryOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

sentinelmetadata.NewSentinelMetadataCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelMetadataCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetVerticals">ResetVerticals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetDomains"></a>

```go
func ResetDomains()
```

##### `ResetVerticals` <a name="ResetVerticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetVerticals"></a>

```go
func ResetVerticals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domainsInput">DomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticalsInput">VerticalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticals">Verticals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domainsInput"></a>

```go
func DomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VerticalsInput`<sup>Optional</sup> <a name="VerticalsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticalsInput"></a>

```go
func VerticalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `Verticals`<sup>Required</sup> <a name="Verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticals"></a>

```go
func Verticals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelMetadataCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---


### SentinelMetadataSourceOutputReference <a name="SentinelMetadataSourceOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

sentinelmetadata.NewSentinelMetadataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelMetadataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelMetadataSource
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---


### SentinelMetadataSupportOutputReference <a name="SentinelMetadataSupportOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

sentinelmetadata.NewSentinelMetadataSupportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelMetadataSupportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetLink` <a name="ResetLink" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetLink"></a>

```go
func ResetLink()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelMetadataSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---


### SentinelMetadataTimeoutsOutputReference <a name="SentinelMetadataTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/sentinelmetadata"

sentinelmetadata.NewSentinelMetadataTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelMetadataTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




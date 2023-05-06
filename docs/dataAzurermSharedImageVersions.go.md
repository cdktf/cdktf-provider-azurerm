# `data_azurerm_shared_image_versions`

Refer to the Terraform Registory for docs: [`data_azurerm_shared_image_versions`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions).

# `dataAzurermSharedImageVersions` Submodule <a name="`dataAzurermSharedImageVersions` Submodule" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSharedImageVersions <a name="DataAzurermSharedImageVersions" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions azurerm_shared_image_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

dataazurermsharedimageversions.NewDataAzurermSharedImageVersions(scope Construct, id *string, config DataAzurermSharedImageVersionsConfig) DataAzurermSharedImageVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig">DataAzurermSharedImageVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig">DataAzurermSharedImageVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetTagsFilter">ResetTagsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermSharedImageVersionsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetId"></a>

```go
func ResetId()
```

##### `ResetTagsFilter` <a name="ResetTagsFilter" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetTagsFilter"></a>

```go
func ResetTagsFilter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

dataazurermsharedimageversions.DataAzurermSharedImageVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

dataazurermsharedimageversions.DataAzurermSharedImageVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

dataazurermsharedimageversions.DataAzurermSharedImageVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.images">Images</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList">DataAzurermSharedImageVersionsImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference">DataAzurermSharedImageVersionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.galleryNameInput">GalleryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tagsFilterInput">TagsFilterInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.galleryName">GalleryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tagsFilter">TagsFilter</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Images`<sup>Required</sup> <a name="Images" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.images"></a>

```go
func Images() DataAzurermSharedImageVersionsImagesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList">DataAzurermSharedImageVersionsImagesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.timeouts"></a>

```go
func Timeouts() DataAzurermSharedImageVersionsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference">DataAzurermSharedImageVersionsTimeoutsOutputReference</a>

---

##### `GalleryNameInput`<sup>Optional</sup> <a name="GalleryNameInput" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.galleryNameInput"></a>

```go
func GalleryNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsFilterInput`<sup>Optional</sup> <a name="TagsFilterInput" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tagsFilterInput"></a>

```go
func TagsFilterInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.galleryName"></a>

```go
func GalleryName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `TagsFilter`<sup>Required</sup> <a name="TagsFilter" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tagsFilter"></a>

```go
func TagsFilter() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSharedImageVersionsConfig <a name="DataAzurermSharedImageVersionsConfig" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

&dataazurermsharedimageversions.DataAzurermSharedImageVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GalleryName: *string,
	ImageName: *string,
	ResourceGroupName: *string,
	Id: *string,
	TagsFilter: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.galleryName">GalleryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#gallery_name DataAzurermSharedImageVersions#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#image_name DataAzurermSharedImageVersions#image_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#resource_group_name DataAzurermSharedImageVersions#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#id DataAzurermSharedImageVersions#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.tagsFilter">TagsFilter</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#tags_filter DataAzurermSharedImageVersions#tags_filter}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.galleryName"></a>

```go
GalleryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#gallery_name DataAzurermSharedImageVersions#gallery_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#image_name DataAzurermSharedImageVersions#image_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#resource_group_name DataAzurermSharedImageVersions#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#id DataAzurermSharedImageVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TagsFilter`<sup>Optional</sup> <a name="TagsFilter" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.tagsFilter"></a>

```go
TagsFilter *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#tags_filter DataAzurermSharedImageVersions#tags_filter}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsConfig.property.timeouts"></a>

```go
Timeouts DataAzurermSharedImageVersionsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts">DataAzurermSharedImageVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#timeouts DataAzurermSharedImageVersions#timeouts}

---

### DataAzurermSharedImageVersionsImages <a name="DataAzurermSharedImageVersionsImages" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

&dataazurermsharedimageversions.DataAzurermSharedImageVersionsImages {

}
```


### DataAzurermSharedImageVersionsImagesTargetRegion <a name="DataAzurermSharedImageVersionsImagesTargetRegion" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

&dataazurermsharedimageversions.DataAzurermSharedImageVersionsImagesTargetRegion {

}
```


### DataAzurermSharedImageVersionsTimeouts <a name="DataAzurermSharedImageVersionsTimeouts" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

&dataazurermsharedimageversions.DataAzurermSharedImageVersionsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#read DataAzurermSharedImageVersions#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/shared_image_versions#read DataAzurermSharedImageVersions#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSharedImageVersionsImagesList <a name="DataAzurermSharedImageVersionsImagesList" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

dataazurermsharedimageversions.NewDataAzurermSharedImageVersionsImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSharedImageVersionsImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.get"></a>

```go
func Get(index *f64) DataAzurermSharedImageVersionsImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSharedImageVersionsImagesOutputReference <a name="DataAzurermSharedImageVersionsImagesOutputReference" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

dataazurermsharedimageversions.NewDataAzurermSharedImageVersionsImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSharedImageVersionsImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.managedImageId">ManagedImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.targetRegion">TargetRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList">DataAzurermSharedImageVersionsImagesTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImages">DataAzurermSharedImageVersionsImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeFromLatest`<sup>Required</sup> <a name="ExcludeFromLatest" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.excludeFromLatest"></a>

```go
func ExcludeFromLatest() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedImageId`<sup>Required</sup> <a name="ManagedImageId" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.managedImageId"></a>

```go
func ManagedImageId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.targetRegion"></a>

```go
func TargetRegion() DataAzurermSharedImageVersionsImagesTargetRegionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList">DataAzurermSharedImageVersionsImagesTargetRegionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSharedImageVersionsImages
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImages">DataAzurermSharedImageVersionsImages</a>

---


### DataAzurermSharedImageVersionsImagesTargetRegionList <a name="DataAzurermSharedImageVersionsImagesTargetRegionList" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

dataazurermsharedimageversions.NewDataAzurermSharedImageVersionsImagesTargetRegionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermSharedImageVersionsImagesTargetRegionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.get"></a>

```go
func Get(index *f64) DataAzurermSharedImageVersionsImagesTargetRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermSharedImageVersionsImagesTargetRegionOutputReference <a name="DataAzurermSharedImageVersionsImagesTargetRegionOutputReference" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

dataazurermsharedimageversions.NewDataAzurermSharedImageVersionsImagesTargetRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermSharedImageVersionsImagesTargetRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegion">DataAzurermSharedImageVersionsImagesTargetRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.regionalReplicaCount"></a>

```go
func RegionalReplicaCount() *f64
```

- *Type:* *f64

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermSharedImageVersionsImagesTargetRegion
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsImagesTargetRegion">DataAzurermSharedImageVersionsImagesTargetRegion</a>

---


### DataAzurermSharedImageVersionsTimeoutsOutputReference <a name="DataAzurermSharedImageVersionsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermsharedimageversions"

dataazurermsharedimageversions.NewDataAzurermSharedImageVersionsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermSharedImageVersionsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSharedImageVersions.DataAzurermSharedImageVersionsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




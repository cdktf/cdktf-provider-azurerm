# `data_azurerm_mobile_network_slice`

Refer to the Terraform Registory for docs: [`data_azurerm_mobile_network_slice`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice).

# `dataAzurermMobileNetworkSlice` Submodule <a name="`dataAzurermMobileNetworkSlice` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkSlice <a name="DataAzurermMobileNetworkSlice" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice azurerm_mobile_network_slice}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

dataazurermmobilenetworkslice.NewDataAzurermMobileNetworkSlice(scope Construct, id *string, config DataAzurermMobileNetworkSliceConfig) DataAzurermMobileNetworkSlice
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig">DataAzurermMobileNetworkSliceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig">DataAzurermMobileNetworkSliceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermMobileNetworkSliceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeouts">DataAzurermMobileNetworkSliceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

dataazurermmobilenetworkslice.DataAzurermMobileNetworkSlice_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

dataazurermmobilenetworkslice.DataAzurermMobileNetworkSlice_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

dataazurermmobilenetworkslice.DataAzurermMobileNetworkSlice_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.singleNetworkSliceSelectionAssistanceInformation">SingleNetworkSliceSelectionAssistanceInformation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList">DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference">DataAzurermMobileNetworkSliceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.mobileNetworkIdInput">MobileNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.mobileNetworkId">MobileNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `SingleNetworkSliceSelectionAssistanceInformation`<sup>Required</sup> <a name="SingleNetworkSliceSelectionAssistanceInformation" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.singleNetworkSliceSelectionAssistanceInformation"></a>

```go
func SingleNetworkSliceSelectionAssistanceInformation() DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList">DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.timeouts"></a>

```go
func Timeouts() DataAzurermMobileNetworkSliceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference">DataAzurermMobileNetworkSliceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MobileNetworkIdInput`<sup>Optional</sup> <a name="MobileNetworkIdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.mobileNetworkIdInput"></a>

```go
func MobileNetworkIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.mobileNetworkId"></a>

```go
func MobileNetworkId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSlice.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkSliceConfig <a name="DataAzurermMobileNetworkSliceConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

&dataazurermmobilenetworkslice.DataAzurermMobileNetworkSliceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MobileNetworkId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.mobileNetworkId">MobileNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice#mobile_network_id DataAzurermMobileNetworkSlice#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice#name DataAzurermMobileNetworkSlice#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice#id DataAzurermMobileNetworkSlice#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeouts">DataAzurermMobileNetworkSliceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.mobileNetworkId"></a>

```go
MobileNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice#mobile_network_id DataAzurermMobileNetworkSlice#mobile_network_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice#name DataAzurermMobileNetworkSlice#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice#id DataAzurermMobileNetworkSlice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceConfig.property.timeouts"></a>

```go
Timeouts DataAzurermMobileNetworkSliceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeouts">DataAzurermMobileNetworkSliceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice#timeouts DataAzurermMobileNetworkSlice#timeouts}

---

### DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation <a name="DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

&dataazurermmobilenetworkslice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation {

}
```


### DataAzurermMobileNetworkSliceTimeouts <a name="DataAzurermMobileNetworkSliceTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

&dataazurermmobilenetworkslice.DataAzurermMobileNetworkSliceTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice#read DataAzurermMobileNetworkSlice#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/data-sources/mobile_network_slice#read DataAzurermMobileNetworkSlice#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList <a name="DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

dataazurermmobilenetworkslice.NewDataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.get"></a>

```go
func Get(index *f64) DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference <a name="DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

dataazurermmobilenetworkslice.NewDataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceDifferentiator">SliceDifferentiator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceServiceType">SliceServiceType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SliceDifferentiator`<sup>Required</sup> <a name="SliceDifferentiator" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceDifferentiator"></a>

```go
func SliceDifferentiator() *string
```

- *Type:* *string

---

##### `SliceServiceType`<sup>Required</sup> <a name="SliceServiceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.sliceServiceType"></a>

```go
func SliceServiceType() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation">DataAzurermMobileNetworkSliceSingleNetworkSliceSelectionAssistanceInformation</a>

---


### DataAzurermMobileNetworkSliceTimeoutsOutputReference <a name="DataAzurermMobileNetworkSliceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmobilenetworkslice"

dataazurermmobilenetworkslice.NewDataAzurermMobileNetworkSliceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermMobileNetworkSliceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSlice.DataAzurermMobileNetworkSliceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




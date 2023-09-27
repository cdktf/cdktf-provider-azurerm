# `data_azurerm_traffic_manager_geographical_location`

Refer to the Terraform Registory for docs: [`data_azurerm_traffic_manager_geographical_location`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/traffic_manager_geographical_location).

# `dataAzurermTrafficManagerGeographicalLocation` Submodule <a name="`dataAzurermTrafficManagerGeographicalLocation` Submodule" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermTrafficManagerGeographicalLocation <a name="DataAzurermTrafficManagerGeographicalLocation" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/traffic_manager_geographical_location azurerm_traffic_manager_geographical_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermtrafficmanagergeographicallocation"

dataazurermtrafficmanagergeographicallocation.NewDataAzurermTrafficManagerGeographicalLocation(scope Construct, id *string, config DataAzurermTrafficManagerGeographicalLocationConfig) DataAzurermTrafficManagerGeographicalLocation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig">DataAzurermTrafficManagerGeographicalLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig">DataAzurermTrafficManagerGeographicalLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermTrafficManagerGeographicalLocationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermtrafficmanagergeographicallocation"

dataazurermtrafficmanagergeographicallocation.DataAzurermTrafficManagerGeographicalLocation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermtrafficmanagergeographicallocation"

dataazurermtrafficmanagergeographicallocation.DataAzurermTrafficManagerGeographicalLocation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermtrafficmanagergeographicallocation"

dataazurermtrafficmanagergeographicallocation.DataAzurermTrafficManagerGeographicalLocation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference">DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeouts"></a>

```go
func Timeouts() DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference">DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermTrafficManagerGeographicalLocationConfig <a name="DataAzurermTrafficManagerGeographicalLocationConfig" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermtrafficmanagergeographicallocation"

&dataazurermtrafficmanagergeographicallocation.DataAzurermTrafficManagerGeographicalLocationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/traffic_manager_geographical_location#name DataAzurermTrafficManagerGeographicalLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/traffic_manager_geographical_location#id DataAzurermTrafficManagerGeographicalLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/traffic_manager_geographical_location#name DataAzurermTrafficManagerGeographicalLocation#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/traffic_manager_geographical_location#id DataAzurermTrafficManagerGeographicalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationConfig.property.timeouts"></a>

```go
Timeouts DataAzurermTrafficManagerGeographicalLocationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts">DataAzurermTrafficManagerGeographicalLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/traffic_manager_geographical_location#timeouts DataAzurermTrafficManagerGeographicalLocation#timeouts}

---

### DataAzurermTrafficManagerGeographicalLocationTimeouts <a name="DataAzurermTrafficManagerGeographicalLocationTimeouts" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermtrafficmanagergeographicallocation"

&dataazurermtrafficmanagergeographicallocation.DataAzurermTrafficManagerGeographicalLocationTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/traffic_manager_geographical_location#read DataAzurermTrafficManagerGeographicalLocation#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/traffic_manager_geographical_location#read DataAzurermTrafficManagerGeographicalLocation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference <a name="DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermtrafficmanagergeographicallocation"

dataazurermtrafficmanagergeographicallocation.NewDataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermTrafficManagerGeographicalLocation.DataAzurermTrafficManagerGeographicalLocationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




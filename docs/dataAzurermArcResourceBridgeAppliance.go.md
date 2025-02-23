# `dataAzurermArcResourceBridgeAppliance` Submodule <a name="`dataAzurermArcResourceBridgeAppliance` Submodule" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermArcResourceBridgeAppliance <a name="DataAzurermArcResourceBridgeAppliance" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance azurerm_arc_resource_bridge_appliance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

dataazurermarcresourcebridgeappliance.NewDataAzurermArcResourceBridgeAppliance(scope Construct, id *string, config DataAzurermArcResourceBridgeApplianceConfig) DataAzurermArcResourceBridgeAppliance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig">DataAzurermArcResourceBridgeApplianceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig">DataAzurermArcResourceBridgeApplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermArcResourceBridgeApplianceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

dataazurermarcresourcebridgeappliance.DataAzurermArcResourceBridgeAppliance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

dataazurermarcresourcebridgeappliance.DataAzurermArcResourceBridgeAppliance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

dataazurermarcresourcebridgeappliance.DataAzurermArcResourceBridgeAppliance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

dataazurermarcresourcebridgeappliance.DataAzurermArcResourceBridgeAppliance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermArcResourceBridgeAppliance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermArcResourceBridgeAppliance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermArcResourceBridgeAppliance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.distro">Distro</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList">DataAzurermArcResourceBridgeApplianceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.infrastructureProvider">InfrastructureProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.publicKeyBase64">PublicKeyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference">DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Distro`<sup>Required</sup> <a name="Distro" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.distro"></a>

```go
func Distro() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.identity"></a>

```go
func Identity() DataAzurermArcResourceBridgeApplianceIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList">DataAzurermArcResourceBridgeApplianceIdentityList</a>

---

##### `InfrastructureProvider`<sup>Required</sup> <a name="InfrastructureProvider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.infrastructureProvider"></a>

```go
func InfrastructureProvider() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PublicKeyBase64`<sup>Required</sup> <a name="PublicKeyBase64" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.publicKeyBase64"></a>

```go
func PublicKeyBase64() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeouts"></a>

```go
func Timeouts() DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference">DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermArcResourceBridgeApplianceConfig <a name="DataAzurermArcResourceBridgeApplianceConfig" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

&dataazurermarcresourcebridgeappliance.DataAzurermArcResourceBridgeApplianceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.timeouts"></a>

```go
Timeouts DataAzurermArcResourceBridgeApplianceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#timeouts DataAzurermArcResourceBridgeAppliance#timeouts}

---

### DataAzurermArcResourceBridgeApplianceIdentity <a name="DataAzurermArcResourceBridgeApplianceIdentity" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

&dataazurermarcresourcebridgeappliance.DataAzurermArcResourceBridgeApplianceIdentity {

}
```


### DataAzurermArcResourceBridgeApplianceTimeouts <a name="DataAzurermArcResourceBridgeApplianceTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

&dataazurermarcresourcebridgeappliance.DataAzurermArcResourceBridgeApplianceTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#read DataAzurermArcResourceBridgeAppliance#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/arc_resource_bridge_appliance#read DataAzurermArcResourceBridgeAppliance#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermArcResourceBridgeApplianceIdentityList <a name="DataAzurermArcResourceBridgeApplianceIdentityList" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

dataazurermarcresourcebridgeappliance.NewDataAzurermArcResourceBridgeApplianceIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermArcResourceBridgeApplianceIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermArcResourceBridgeApplianceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermArcResourceBridgeApplianceIdentityOutputReference <a name="DataAzurermArcResourceBridgeApplianceIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

dataazurermarcresourcebridgeappliance.NewDataAzurermArcResourceBridgeApplianceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermArcResourceBridgeApplianceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity">DataAzurermArcResourceBridgeApplianceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermArcResourceBridgeApplianceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity">DataAzurermArcResourceBridgeApplianceIdentity</a>

---


### DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference <a name="DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermarcresourcebridgeappliance"

dataazurermarcresourcebridgeappliance.NewDataAzurermArcResourceBridgeApplianceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




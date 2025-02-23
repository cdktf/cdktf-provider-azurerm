# `dataAzurermMobileNetworkPacketCoreDataPlane` Submodule <a name="`dataAzurermMobileNetworkPacketCoreDataPlane` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkPacketCoreDataPlane <a name="DataAzurermMobileNetworkPacketCoreDataPlane" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane azurerm_mobile_network_packet_core_data_plane}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworkpacketcoredataplane"

dataazurermmobilenetworkpacketcoredataplane.NewDataAzurermMobileNetworkPacketCoreDataPlane(scope Construct, id *string, config DataAzurermMobileNetworkPacketCoreDataPlaneConfig) DataAzurermMobileNetworkPacketCoreDataPlane
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig">DataAzurermMobileNetworkPacketCoreDataPlaneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig">DataAzurermMobileNetworkPacketCoreDataPlaneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworkpacketcoredataplane"

dataazurermmobilenetworkpacketcoredataplane.DataAzurermMobileNetworkPacketCoreDataPlane_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworkpacketcoredataplane"

dataazurermmobilenetworkpacketcoredataplane.DataAzurermMobileNetworkPacketCoreDataPlane_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworkpacketcoredataplane"

dataazurermmobilenetworkpacketcoredataplane.DataAzurermMobileNetworkPacketCoreDataPlane_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworkpacketcoredataplane"

dataazurermmobilenetworkpacketcoredataplane.DataAzurermMobileNetworkPacketCoreDataPlane_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermMobileNetworkPacketCoreDataPlane resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermMobileNetworkPacketCoreDataPlane to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermMobileNetworkPacketCoreDataPlane that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkPacketCoreDataPlane to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address">UserPlaneAccessIpv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway">UserPlaneAccessIpv4Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet">UserPlaneAccessIpv4Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessName">UserPlaneAccessName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput">MobileNetworkPacketCoreControlPlaneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId">MobileNetworkPacketCoreControlPlaneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeouts"></a>

```go
func Timeouts() DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference">DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference</a>

---

##### `UserPlaneAccessIpv4Address`<sup>Required</sup> <a name="UserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Address"></a>

```go
func UserPlaneAccessIpv4Address() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="UserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Gateway"></a>

```go
func UserPlaneAccessIpv4Gateway() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="UserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessIpv4Subnet"></a>

```go
func UserPlaneAccessIpv4Subnet() *string
```

- *Type:* *string

---

##### `UserPlaneAccessName`<sup>Required</sup> <a name="UserPlaneAccessName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.userPlaneAccessName"></a>

```go
func UserPlaneAccessName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MobileNetworkPacketCoreControlPlaneIdInput`<sup>Optional</sup> <a name="MobileNetworkPacketCoreControlPlaneIdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneIdInput"></a>

```go
func MobileNetworkPacketCoreControlPlaneIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MobileNetworkPacketCoreControlPlaneId`<sup>Required</sup> <a name="MobileNetworkPacketCoreControlPlaneId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.mobileNetworkPacketCoreControlPlaneId"></a>

```go
func MobileNetworkPacketCoreControlPlaneId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlane.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkPacketCoreDataPlaneConfig <a name="DataAzurermMobileNetworkPacketCoreDataPlaneConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworkpacketcoredataplane"

&dataazurermmobilenetworkpacketcoredataplane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MobileNetworkPacketCoreControlPlaneId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId">MobileNetworkPacketCoreControlPlaneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id DataAzurermMobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#name DataAzurermMobileNetworkPacketCoreDataPlane#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#id DataAzurermMobileNetworkPacketCoreDataPlane#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MobileNetworkPacketCoreControlPlaneId`<sup>Required</sup> <a name="MobileNetworkPacketCoreControlPlaneId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.mobileNetworkPacketCoreControlPlaneId"></a>

```go
MobileNetworkPacketCoreControlPlaneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#mobile_network_packet_core_control_plane_id DataAzurermMobileNetworkPacketCoreDataPlane#mobile_network_packet_core_control_plane_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#name DataAzurermMobileNetworkPacketCoreDataPlane#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#id DataAzurermMobileNetworkPacketCoreDataPlane#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneConfig.property.timeouts"></a>

```go
Timeouts DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts">DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#timeouts DataAzurermMobileNetworkPacketCoreDataPlane#timeouts}

---

### DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts <a name="DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworkpacketcoredataplane"

&dataazurermmobilenetworkpacketcoredataplane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#read DataAzurermMobileNetworkPacketCoreDataPlane#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/mobile_network_packet_core_data_plane#read DataAzurermMobileNetworkPacketCoreDataPlane#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference <a name="DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworkpacketcoredataplane"

dataazurermmobilenetworkpacketcoredataplane.NewDataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkPacketCoreDataPlane.DataAzurermMobileNetworkPacketCoreDataPlaneTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




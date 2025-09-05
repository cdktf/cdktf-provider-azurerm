# `dataAzurermDynatraceMonitor` Submodule <a name="`dataAzurermDynatraceMonitor` Submodule" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDynatraceMonitor <a name="DataAzurermDynatraceMonitor" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor azurerm_dynatrace_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitor(scope Construct, id *string, config DataAzurermDynatraceMonitorConfig) DataAzurermDynatraceMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig">DataAzurermDynatraceMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig">DataAzurermDynatraceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermDynatraceMonitorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeouts">DataAzurermDynatraceMonitorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermDynatraceMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.DataAzurermDynatraceMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.DataAzurermDynatraceMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.DataAzurermDynatraceMonitor_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.DataAzurermDynatraceMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermDynatraceMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermDynatraceMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermDynatraceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermDynatraceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.environmentProperties">EnvironmentProperties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList">DataAzurermDynatraceMonitorEnvironmentPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList">DataAzurermDynatraceMonitorIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.marketplaceSubscription">MarketplaceSubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.monitoringEnabled">MonitoringEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.plan">Plan</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList">DataAzurermDynatraceMonitorPlanList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference">DataAzurermDynatraceMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.user">User</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList">DataAzurermDynatraceMonitorUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EnvironmentProperties`<sup>Required</sup> <a name="EnvironmentProperties" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.environmentProperties"></a>

```go
func EnvironmentProperties() DataAzurermDynatraceMonitorEnvironmentPropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList">DataAzurermDynatraceMonitorEnvironmentPropertiesList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.identity"></a>

```go
func Identity() DataAzurermDynatraceMonitorIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList">DataAzurermDynatraceMonitorIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MarketplaceSubscription`<sup>Required</sup> <a name="MarketplaceSubscription" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.marketplaceSubscription"></a>

```go
func MarketplaceSubscription() *string
```

- *Type:* *string

---

##### `MonitoringEnabled`<sup>Required</sup> <a name="MonitoringEnabled" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.monitoringEnabled"></a>

```go
func MonitoringEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.plan"></a>

```go
func Plan() DataAzurermDynatraceMonitorPlanList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList">DataAzurermDynatraceMonitorPlanList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.timeouts"></a>

```go
func Timeouts() DataAzurermDynatraceMonitorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference">DataAzurermDynatraceMonitorTimeoutsOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.user"></a>

```go
func User() DataAzurermDynatraceMonitorUserList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList">DataAzurermDynatraceMonitorUserList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDynatraceMonitorConfig <a name="DataAzurermDynatraceMonitorConfig" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

&dataazurermdynatracemonitor.DataAzurermDynatraceMonitorConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#name DataAzurermDynatraceMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#resource_group_name DataAzurermDynatraceMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#id DataAzurermDynatraceMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeouts">DataAzurermDynatraceMonitorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#name DataAzurermDynatraceMonitor#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#resource_group_name DataAzurermDynatraceMonitor#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#id DataAzurermDynatraceMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorConfig.property.timeouts"></a>

```go
Timeouts DataAzurermDynatraceMonitorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeouts">DataAzurermDynatraceMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#timeouts DataAzurermDynatraceMonitor#timeouts}

---

### DataAzurermDynatraceMonitorEnvironmentProperties <a name="DataAzurermDynatraceMonitorEnvironmentProperties" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

&dataazurermdynatracemonitor.DataAzurermDynatraceMonitorEnvironmentProperties {

}
```


### DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo <a name="DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

&dataazurermdynatracemonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo {

}
```


### DataAzurermDynatraceMonitorIdentity <a name="DataAzurermDynatraceMonitorIdentity" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

&dataazurermdynatracemonitor.DataAzurermDynatraceMonitorIdentity {

}
```


### DataAzurermDynatraceMonitorPlan <a name="DataAzurermDynatraceMonitorPlan" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

&dataazurermdynatracemonitor.DataAzurermDynatraceMonitorPlan {

}
```


### DataAzurermDynatraceMonitorTimeouts <a name="DataAzurermDynatraceMonitorTimeouts" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

&dataazurermdynatracemonitor.DataAzurermDynatraceMonitorTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#read DataAzurermDynatraceMonitor#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/dynatrace_monitor#read DataAzurermDynatraceMonitor#read}.

---

### DataAzurermDynatraceMonitorUser <a name="DataAzurermDynatraceMonitorUser" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

&dataazurermdynatracemonitor.DataAzurermDynatraceMonitorUser {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList <a name="DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get"></a>

```go
func Get(index *f64) DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference <a name="DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo">DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfo</a>

---


### DataAzurermDynatraceMonitorEnvironmentPropertiesList <a name="DataAzurermDynatraceMonitorEnvironmentPropertiesList" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorEnvironmentPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDynatraceMonitorEnvironmentPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.get"></a>

```go
func Get(index *f64) DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference <a name="DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfo">EnvironmentInfo</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList">DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentProperties">DataAzurermDynatraceMonitorEnvironmentProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInfo`<sup>Required</sup> <a name="EnvironmentInfo" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.property.environmentInfo"></a>

```go
func EnvironmentInfo() DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList">DataAzurermDynatraceMonitorEnvironmentPropertiesEnvironmentInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDynatraceMonitorEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorEnvironmentProperties">DataAzurermDynatraceMonitorEnvironmentProperties</a>

---


### DataAzurermDynatraceMonitorIdentityList <a name="DataAzurermDynatraceMonitorIdentityList" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDynatraceMonitorIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermDynatraceMonitorIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDynatraceMonitorIdentityOutputReference <a name="DataAzurermDynatraceMonitorIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDynatraceMonitorIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentity">DataAzurermDynatraceMonitorIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDynatraceMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorIdentity">DataAzurermDynatraceMonitorIdentity</a>

---


### DataAzurermDynatraceMonitorPlanList <a name="DataAzurermDynatraceMonitorPlanList" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorPlanList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDynatraceMonitorPlanList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.get"></a>

```go
func Get(index *f64) DataAzurermDynatraceMonitorPlanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDynatraceMonitorPlanOutputReference <a name="DataAzurermDynatraceMonitorPlanOutputReference" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDynatraceMonitorPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.billingCycle">BillingCycle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.effectiveDate">EffectiveDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.usageType">UsageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlan">DataAzurermDynatraceMonitorPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingCycle`<sup>Required</sup> <a name="BillingCycle" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.billingCycle"></a>

```go
func BillingCycle() *string
```

- *Type:* *string

---

##### `EffectiveDate`<sup>Required</sup> <a name="EffectiveDate" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.effectiveDate"></a>

```go
func EffectiveDate() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `UsageType`<sup>Required</sup> <a name="UsageType" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.usageType"></a>

```go
func UsageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDynatraceMonitorPlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorPlan">DataAzurermDynatraceMonitorPlan</a>

---


### DataAzurermDynatraceMonitorTimeoutsOutputReference <a name="DataAzurermDynatraceMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermDynatraceMonitorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermDynatraceMonitorUserList <a name="DataAzurermDynatraceMonitorUserList" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDynatraceMonitorUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.get"></a>

```go
func Get(index *f64) DataAzurermDynatraceMonitorUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDynatraceMonitorUserOutputReference <a name="DataAzurermDynatraceMonitorUserOutputReference" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermdynatracemonitor"

dataazurermdynatracemonitor.NewDataAzurermDynatraceMonitorUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDynatraceMonitorUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUser">DataAzurermDynatraceMonitorUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDynatraceMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDynatraceMonitor.DataAzurermDynatraceMonitorUser">DataAzurermDynatraceMonitorUser</a>

---




# `dataAzurermPolicyVirtualMachineConfigurationAssignment` Submodule <a name="`dataAzurermPolicyVirtualMachineConfigurationAssignment` Submodule" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPolicyVirtualMachineConfigurationAssignment <a name="DataAzurermPolicyVirtualMachineConfigurationAssignment" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment azurerm_policy_virtual_machine_configuration_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermpolicyvirtualmachineconfigurationassignment"

dataazurermpolicyvirtualmachineconfigurationassignment.NewDataAzurermPolicyVirtualMachineConfigurationAssignment(scope Construct, id *string, config DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig) DataAzurermPolicyVirtualMachineConfigurationAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig">DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig">DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts">DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPolicyVirtualMachineConfigurationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermpolicyvirtualmachineconfigurationassignment"

dataazurermpolicyvirtualmachineconfigurationassignment.DataAzurermPolicyVirtualMachineConfigurationAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermpolicyvirtualmachineconfigurationassignment"

dataazurermpolicyvirtualmachineconfigurationassignment.DataAzurermPolicyVirtualMachineConfigurationAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermpolicyvirtualmachineconfigurationassignment"

dataazurermpolicyvirtualmachineconfigurationassignment.DataAzurermPolicyVirtualMachineConfigurationAssignment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermpolicyvirtualmachineconfigurationassignment"

dataazurermpolicyvirtualmachineconfigurationassignment.DataAzurermPolicyVirtualMachineConfigurationAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermPolicyVirtualMachineConfigurationAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermPolicyVirtualMachineConfigurationAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermPolicyVirtualMachineConfigurationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPolicyVirtualMachineConfigurationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.assignmentHash">AssignmentHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.complianceStatus">ComplianceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.contentHash">ContentHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.contentUri">ContentUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.lastComplianceStatusChecked">LastComplianceStatusChecked</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.latestReportId">LatestReportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference">DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.virtualMachineNameInput">VirtualMachineNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.virtualMachineName">VirtualMachineName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AssignmentHash`<sup>Required</sup> <a name="AssignmentHash" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.assignmentHash"></a>

```go
func AssignmentHash() *string
```

- *Type:* *string

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.complianceStatus"></a>

```go
func ComplianceStatus() *string
```

- *Type:* *string

---

##### `ContentHash`<sup>Required</sup> <a name="ContentHash" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.contentHash"></a>

```go
func ContentHash() *string
```

- *Type:* *string

---

##### `ContentUri`<sup>Required</sup> <a name="ContentUri" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.contentUri"></a>

```go
func ContentUri() *string
```

- *Type:* *string

---

##### `LastComplianceStatusChecked`<sup>Required</sup> <a name="LastComplianceStatusChecked" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.lastComplianceStatusChecked"></a>

```go
func LastComplianceStatusChecked() *string
```

- *Type:* *string

---

##### `LatestReportId`<sup>Required</sup> <a name="LatestReportId" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.latestReportId"></a>

```go
func LatestReportId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.timeouts"></a>

```go
func Timeouts() DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference">DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachineNameInput`<sup>Optional</sup> <a name="VirtualMachineNameInput" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.virtualMachineNameInput"></a>

```go
func VirtualMachineNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `VirtualMachineName`<sup>Required</sup> <a name="VirtualMachineName" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.virtualMachineName"></a>

```go
func VirtualMachineName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig <a name="DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermpolicyvirtualmachineconfigurationassignment"

&dataazurermpolicyvirtualmachineconfigurationassignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	VirtualMachineName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#name DataAzurermPolicyVirtualMachineConfigurationAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#resource_group_name DataAzurermPolicyVirtualMachineConfigurationAssignment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.virtualMachineName">VirtualMachineName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#virtual_machine_name DataAzurermPolicyVirtualMachineConfigurationAssignment#virtual_machine_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#id DataAzurermPolicyVirtualMachineConfigurationAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts">DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#name DataAzurermPolicyVirtualMachineConfigurationAssignment#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#resource_group_name DataAzurermPolicyVirtualMachineConfigurationAssignment#resource_group_name}.

---

##### `VirtualMachineName`<sup>Required</sup> <a name="VirtualMachineName" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.virtualMachineName"></a>

```go
VirtualMachineName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#virtual_machine_name DataAzurermPolicyVirtualMachineConfigurationAssignment#virtual_machine_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#id DataAzurermPolicyVirtualMachineConfigurationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentConfig.property.timeouts"></a>

```go
Timeouts DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts">DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#timeouts DataAzurermPolicyVirtualMachineConfigurationAssignment#timeouts}

---

### DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts <a name="DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermpolicyvirtualmachineconfigurationassignment"

&dataazurermpolicyvirtualmachineconfigurationassignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#read DataAzurermPolicyVirtualMachineConfigurationAssignment#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.32.0/docs/data-sources/policy_virtual_machine_configuration_assignment#read DataAzurermPolicyVirtualMachineConfigurationAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference <a name="DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermpolicyvirtualmachineconfigurationassignment"

dataazurermpolicyvirtualmachineconfigurationassignment.NewDataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPolicyVirtualMachineConfigurationAssignment.DataAzurermPolicyVirtualMachineConfigurationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




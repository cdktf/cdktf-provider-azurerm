# `networkInterfaceApplicationSecurityGroupAssociation` Submodule <a name="`networkInterfaceApplicationSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceApplicationSecurityGroupAssociation <a name="NetworkInterfaceApplicationSecurityGroupAssociation" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association azurerm_network_interface_application_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfaceapplicationsecuritygroupassociation"

networkinterfaceapplicationsecuritygroupassociation.NewNetworkInterfaceApplicationSecurityGroupAssociation(scope Construct, id *string, config NetworkInterfaceApplicationSecurityGroupAssociationConfig) NetworkInterfaceApplicationSecurityGroupAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig">NetworkInterfaceApplicationSecurityGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig">NetworkInterfaceApplicationSecurityGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts"></a>

```go
func PutTimeouts(value NetworkInterfaceApplicationSecurityGroupAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkInterfaceApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfaceapplicationsecuritygroupassociation"

networkinterfaceapplicationsecuritygroupassociation.NetworkInterfaceApplicationSecurityGroupAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfaceapplicationsecuritygroupassociation"

networkinterfaceapplicationsecuritygroupassociation.NetworkInterfaceApplicationSecurityGroupAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfaceapplicationsecuritygroupassociation"

networkinterfaceapplicationsecuritygroupassociation.NetworkInterfaceApplicationSecurityGroupAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfaceapplicationsecuritygroupassociation"

networkinterfaceapplicationsecuritygroupassociation.NetworkInterfaceApplicationSecurityGroupAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkInterfaceApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkInterfaceApplicationSecurityGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkInterfaceApplicationSecurityGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkInterfaceApplicationSecurityGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference">NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput">ApplicationSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupId">ApplicationSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeouts"></a>

```go
func Timeouts() NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference">NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `ApplicationSecurityGroupIdInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupIdInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput"></a>

```go
func ApplicationSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationSecurityGroupId`<sup>Required</sup> <a name="ApplicationSecurityGroupId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupId"></a>

```go
func ApplicationSecurityGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceApplicationSecurityGroupAssociationConfig <a name="NetworkInterfaceApplicationSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfaceapplicationsecuritygroupassociation"

&networkinterfaceapplicationsecuritygroupassociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationSecurityGroupId: *string,
	NetworkInterfaceId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId">ApplicationSecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#application_security_group_id NetworkInterfaceApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#network_interface_id NetworkInterfaceApplicationSecurityGroupAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#id NetworkInterfaceApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationSecurityGroupId`<sup>Required</sup> <a name="ApplicationSecurityGroupId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId"></a>

```go
ApplicationSecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#application_security_group_id NetworkInterfaceApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#network_interface_id NetworkInterfaceApplicationSecurityGroupAssociation#network_interface_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#id NetworkInterfaceApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.timeouts"></a>

```go
Timeouts NetworkInterfaceApplicationSecurityGroupAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#timeouts NetworkInterfaceApplicationSecurityGroupAssociation#timeouts}

---

### NetworkInterfaceApplicationSecurityGroupAssociationTimeouts <a name="NetworkInterfaceApplicationSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfaceapplicationsecuritygroupassociation"

&networkinterfaceapplicationsecuritygroupassociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#create NetworkInterfaceApplicationSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#delete NetworkInterfaceApplicationSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#read NetworkInterfaceApplicationSecurityGroupAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#create NetworkInterfaceApplicationSecurityGroupAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#delete NetworkInterfaceApplicationSecurityGroupAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/network_interface_application_security_group_association#read NetworkInterfaceApplicationSecurityGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference <a name="NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfaceapplicationsecuritygroupassociation"

networkinterfaceapplicationsecuritygroupassociation.NewNetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




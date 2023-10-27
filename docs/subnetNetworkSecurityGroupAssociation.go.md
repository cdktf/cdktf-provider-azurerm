# `azurerm_subnet_network_security_group_association`

Refer to the Terraform Registory for docs: [`azurerm_subnet_network_security_group_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association).

# `subnetNetworkSecurityGroupAssociation` Submodule <a name="`subnetNetworkSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubnetNetworkSecurityGroupAssociation <a name="SubnetNetworkSecurityGroupAssociation" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association azurerm_subnet_network_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/subnetnetworksecuritygroupassociation"

subnetnetworksecuritygroupassociation.NewSubnetNetworkSecurityGroupAssociation(scope Construct, id *string, config SubnetNetworkSecurityGroupAssociationConfig) SubnetNetworkSecurityGroupAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig">SubnetNetworkSecurityGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig">SubnetNetworkSecurityGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.putTimeouts"></a>

```go
func PutTimeouts(value SubnetNetworkSecurityGroupAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SubnetNetworkSecurityGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/subnetnetworksecuritygroupassociation"

subnetnetworksecuritygroupassociation.SubnetNetworkSecurityGroupAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/subnetnetworksecuritygroupassociation"

subnetnetworksecuritygroupassociation.SubnetNetworkSecurityGroupAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/subnetnetworksecuritygroupassociation"

subnetnetworksecuritygroupassociation.SubnetNetworkSecurityGroupAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/subnetnetworksecuritygroupassociation"

subnetnetworksecuritygroupassociation.SubnetNetworkSecurityGroupAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SubnetNetworkSecurityGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SubnetNetworkSecurityGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SubnetNetworkSecurityGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SubnetNetworkSecurityGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference">SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupIdInput">NetworkSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeouts"></a>

```go
func Timeouts() SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference">SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupIdInput`<sup>Optional</sup> <a name="NetworkSecurityGroupIdInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupIdInput"></a>

```go
func NetworkSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.networkSecurityGroupId"></a>

```go
func NetworkSecurityGroupId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetNetworkSecurityGroupAssociationConfig <a name="SubnetNetworkSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/subnetnetworksecuritygroupassociation"

&subnetnetworksecuritygroupassociation.SubnetNetworkSecurityGroupAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NetworkSecurityGroupId: *string,
	SubnetId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#network_security_group_id SubnetNetworkSecurityGroupAssociation#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#subnet_id SubnetNetworkSecurityGroupAssociation#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#id SubnetNetworkSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.networkSecurityGroupId"></a>

```go
NetworkSecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#network_security_group_id SubnetNetworkSecurityGroupAssociation#network_security_group_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#subnet_id SubnetNetworkSecurityGroupAssociation#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#id SubnetNetworkSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationConfig.property.timeouts"></a>

```go
Timeouts SubnetNetworkSecurityGroupAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts">SubnetNetworkSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#timeouts SubnetNetworkSecurityGroupAssociation#timeouts}

---

### SubnetNetworkSecurityGroupAssociationTimeouts <a name="SubnetNetworkSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/subnetnetworksecuritygroupassociation"

&subnetnetworksecuritygroupassociation.SubnetNetworkSecurityGroupAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#create SubnetNetworkSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#delete SubnetNetworkSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#read SubnetNetworkSecurityGroupAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#update SubnetNetworkSecurityGroupAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#create SubnetNetworkSecurityGroupAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#delete SubnetNetworkSecurityGroupAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#read SubnetNetworkSecurityGroupAssociation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/subnet_network_security_group_association#update SubnetNetworkSecurityGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference <a name="SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/subnetnetworksecuritygroupassociation"

subnetnetworksecuritygroupassociation.NewSubnetNetworkSecurityGroupAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnetNetworkSecurityGroupAssociation.SubnetNetworkSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




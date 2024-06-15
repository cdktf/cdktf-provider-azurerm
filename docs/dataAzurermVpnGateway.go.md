# `dataAzurermVpnGateway` Submodule <a name="`dataAzurermVpnGateway` Submodule" id="@cdktf/provider-azurerm.dataAzurermVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVpnGateway <a name="DataAzurermVpnGateway" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway azurerm_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.NewDataAzurermVpnGateway(scope Construct, id *string, config DataAzurermVpnGatewayConfig) DataAzurermVpnGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig">DataAzurermVpnGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig">DataAzurermVpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermVpnGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeouts">DataAzurermVpnGatewayTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVpnGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.DataAzurermVpnGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.DataAzurermVpnGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.DataAzurermVpnGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.DataAzurermVpnGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermVpnGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermVpnGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermVpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.bgpSettings">BgpSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList">DataAzurermVpnGatewayBgpSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.scaleUnit">ScaleUnit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference">DataAzurermVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.virtualHubId">VirtualHubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BgpSettings`<sup>Required</sup> <a name="BgpSettings" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.bgpSettings"></a>

```go
func BgpSettings() DataAzurermVpnGatewayBgpSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList">DataAzurermVpnGatewayBgpSettingsList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ScaleUnit`<sup>Required</sup> <a name="ScaleUnit" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.scaleUnit"></a>

```go
func ScaleUnit() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.timeouts"></a>

```go
func Timeouts() DataAzurermVpnGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference">DataAzurermVpnGatewayTimeoutsOutputReference</a>

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.virtualHubId"></a>

```go
func VirtualHubId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVpnGatewayBgpSettings <a name="DataAzurermVpnGatewayBgpSettings" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

&dataazurermvpngateway.DataAzurermVpnGatewayBgpSettings {

}
```


### DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress <a name="DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

&dataazurermvpngateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress {

}
```


### DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress <a name="DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

&dataazurermvpngateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress {

}
```


### DataAzurermVpnGatewayConfig <a name="DataAzurermVpnGatewayConfig" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

&dataazurermvpngateway.DataAzurermVpnGatewayConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#name DataAzurermVpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#resource_group_name DataAzurermVpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#id DataAzurermVpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeouts">DataAzurermVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#name DataAzurermVpnGateway#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#resource_group_name DataAzurermVpnGateway#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#id DataAzurermVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayConfig.property.timeouts"></a>

```go
Timeouts DataAzurermVpnGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeouts">DataAzurermVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#timeouts DataAzurermVpnGateway#timeouts}

---

### DataAzurermVpnGatewayTimeouts <a name="DataAzurermVpnGatewayTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

&dataazurermvpngateway.DataAzurermVpnGatewayTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#read DataAzurermVpnGateway#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/vpn_gateway#read DataAzurermVpnGateway#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList <a name="DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.NewDataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.get"></a>

```go
func Get(index *f64) DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference <a name="DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.NewDataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIps">CustomIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.defaultIps">DefaultIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.ipConfigurationId">IpConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.tunnelIps">TunnelIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress">DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomIps`<sup>Required</sup> <a name="CustomIps" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIps"></a>

```go
func CustomIps() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultIps`<sup>Required</sup> <a name="DefaultIps" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.defaultIps"></a>

```go
func DefaultIps() *[]*string
```

- *Type:* *[]*string

---

##### `IpConfigurationId`<sup>Required</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.ipConfigurationId"></a>

```go
func IpConfigurationId() *string
```

- *Type:* *string

---

##### `TunnelIps`<sup>Required</sup> <a name="TunnelIps" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.tunnelIps"></a>

```go
func TunnelIps() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress">DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

---


### DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList <a name="DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.NewDataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.get"></a>

```go
func Get(index *f64) DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference <a name="DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.NewDataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIps">CustomIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.defaultIps">DefaultIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.ipConfigurationId">IpConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.tunnelIps">TunnelIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress">DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomIps`<sup>Required</sup> <a name="CustomIps" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIps"></a>

```go
func CustomIps() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultIps`<sup>Required</sup> <a name="DefaultIps" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.defaultIps"></a>

```go
func DefaultIps() *[]*string
```

- *Type:* *[]*string

---

##### `IpConfigurationId`<sup>Required</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.ipConfigurationId"></a>

```go
func IpConfigurationId() *string
```

- *Type:* *string

---

##### `TunnelIps`<sup>Required</sup> <a name="TunnelIps" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.tunnelIps"></a>

```go
func TunnelIps() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress">DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

---


### DataAzurermVpnGatewayBgpSettingsList <a name="DataAzurermVpnGatewayBgpSettingsList" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.NewDataAzurermVpnGatewayBgpSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnGatewayBgpSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.get"></a>

```go
func Get(index *f64) DataAzurermVpnGatewayBgpSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnGatewayBgpSettingsOutputReference <a name="DataAzurermVpnGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.NewDataAzurermVpnGatewayBgpSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnGatewayBgpSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.bgpPeeringAddress">BgpPeeringAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddress">Instance0BgpPeeringAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList">DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddress">Instance1BgpPeeringAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList">DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.peerWeight">PeerWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettings">DataAzurermVpnGatewayBgpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `BgpPeeringAddress`<sup>Required</sup> <a name="BgpPeeringAddress" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.bgpPeeringAddress"></a>

```go
func BgpPeeringAddress() *string
```

- *Type:* *string

---

##### `Instance0BgpPeeringAddress`<sup>Required</sup> <a name="Instance0BgpPeeringAddress" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddress"></a>

```go
func Instance0BgpPeeringAddress() DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList">DataAzurermVpnGatewayBgpSettingsInstance0BgpPeeringAddressList</a>

---

##### `Instance1BgpPeeringAddress`<sup>Required</sup> <a name="Instance1BgpPeeringAddress" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddress"></a>

```go
func Instance1BgpPeeringAddress() DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList">DataAzurermVpnGatewayBgpSettingsInstance1BgpPeeringAddressList</a>

---

##### `PeerWeight`<sup>Required</sup> <a name="PeerWeight" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```go
func PeerWeight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnGatewayBgpSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayBgpSettings">DataAzurermVpnGatewayBgpSettings</a>

---


### DataAzurermVpnGatewayTimeoutsOutputReference <a name="DataAzurermVpnGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/dataazurermvpngateway"

dataazurermvpngateway.NewDataAzurermVpnGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermVpnGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnGateway.DataAzurermVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




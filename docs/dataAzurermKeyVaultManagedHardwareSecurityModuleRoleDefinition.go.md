# `dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule <a name="`dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition azurerm_key_vault_managed_hardware_security_module_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.NewDataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition(scope Construct, id *string, config DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig) DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetManagedHsmId">ResetManagedHsmId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetVaultBaseUrl">ResetVaultBaseUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetManagedHsmId` <a name="ResetManagedHsmId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetManagedHsmId"></a>

```go
func ResetManagedHsmId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVaultBaseUrl` <a name="ResetVaultBaseUrl" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.resetVaultBaseUrl"></a>

```go
func ResetVaultBaseUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.assignableScopes">AssignableScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission">Permission</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId">ResourceManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType">RoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmIdInput">ManagedHsmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.vaultBaseUrlInput">VaultBaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmId">ManagedHsmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.vaultBaseUrl">VaultBaseUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AssignableScopes`<sup>Required</sup> <a name="AssignableScopes" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.assignableScopes"></a>

```go
func AssignableScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission"></a>

```go
func Permission() DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a>

---

##### `ResourceManagerId`<sup>Required</sup> <a name="ResourceManagerId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId"></a>

```go
func ResourceManagerId() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType"></a>

```go
func RoleType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts"></a>

```go
func Timeouts() DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedHsmIdInput`<sup>Optional</sup> <a name="ManagedHsmIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmIdInput"></a>

```go
func ManagedHsmIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VaultBaseUrlInput`<sup>Optional</sup> <a name="VaultBaseUrlInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.vaultBaseUrlInput"></a>

```go
func VaultBaseUrlInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedHsmId`<sup>Required</sup> <a name="ManagedHsmId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmId"></a>

```go
func ManagedHsmId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VaultBaseUrl`<sup>Required</sup> <a name="VaultBaseUrl" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.vaultBaseUrl"></a>

```go
func VaultBaseUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

&dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	ManagedHsmId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts,
	VaultBaseUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#name DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#id DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.managedHsmId">ManagedHsmId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.vaultBaseUrl">VaultBaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#vault_base_url DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#vault_base_url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#name DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#id DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedHsmId`<sup>Optional</sup> <a name="ManagedHsmId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.managedHsmId"></a>

```go
ManagedHsmId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts"></a>

```go
Timeouts DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#timeouts DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#timeouts}

---

##### `VaultBaseUrl`<sup>Optional</sup> <a name="VaultBaseUrl" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.vaultBaseUrl"></a>

```go
VaultBaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#vault_base_url DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#vault_base_url}.

---

### DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

&dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission {

}
```


### DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

&dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#read DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#read DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.NewDataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get"></a>

```go
func Get(index *f64) DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.NewDataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions">DataActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions">NotActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions">NotDataActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `DataActions`<sup>Required</sup> <a name="DataActions" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions"></a>

```go
func DataActions() *[]*string
```

- *Type:* *[]*string

---

##### `NotActions`<sup>Required</sup> <a name="NotActions" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions"></a>

```go
func NotActions() *[]*string
```

- *Type:* *[]*string

---

##### `NotDataActions`<sup>Required</sup> <a name="NotDataActions" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions"></a>

```go
func NotDataActions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>

---


### DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition"

dataazurermkeyvaultmanagedhardwaresecuritymoduleroledefinition.NewDataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition.DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




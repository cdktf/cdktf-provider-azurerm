# `keyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule <a name="`keyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinition <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinition" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition azurerm_key_vault_managed_hardware_security_module_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

keyvaultmanagedhardwaresecuritymoduleroledefinition.NewKeyVaultManagedHardwareSecurityModuleRoleDefinition(scope Construct, id *string, config KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig) KeyVaultManagedHardwareSecurityModuleRoleDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig">KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig">KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission">PutPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetPermission">ResetPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPermission` <a name="PutPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission"></a>

```go
func PutPermission(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts"></a>

```go
func PutTimeouts(value KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetPermission"></a>

```go
func ResetPermission()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetRoleName"></a>

```go
func ResetRoleName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

keyvaultmanagedhardwaresecuritymoduleroledefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

keyvaultmanagedhardwaresecuritymoduleroledefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

keyvaultmanagedhardwaresecuritymoduleroledefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

keyvaultmanagedhardwaresecuritymoduleroledefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleRoleDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KeyVaultManagedHardwareSecurityModuleRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission">Permission</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId">ResourceManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType">RoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmIdInput">ManagedHsmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permissionInput">PermissionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmId">ManagedHsmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission"></a>

```go
func Permission() KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a>

---

##### `ResourceManagerId`<sup>Required</sup> <a name="ResourceManagerId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId"></a>

```go
func ResourceManagerId() *string
```

- *Type:* *string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType"></a>

```go
func RoleType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts"></a>

```go
func Timeouts() KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedHsmIdInput`<sup>Optional</sup> <a name="ManagedHsmIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmIdInput"></a>

```go
func ManagedHsmIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permissionInput"></a>

```go
func PermissionInput() interface{}
```

- *Type:* interface{}

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedHsmId`<sup>Required</sup> <a name="ManagedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmId"></a>

```go
func ManagedHsmId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

&keyvaultmanagedhardwaresecuritymoduleroledefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedHsmId: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Permission: interface{},
	RoleName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.managedHsmId">ManagedHsmId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.permission">Permission</a></code> | <code>interface{}</code> | permission block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedHsmId`<sup>Required</sup> <a name="ManagedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.managedHsmId"></a>

```go
ManagedHsmId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.permission"></a>

```go
Permission interface{}
```

- *Type:* interface{}

permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#permission KeyVaultManagedHardwareSecurityModuleRoleDefinition#permission}

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts"></a>

```go
Timeouts KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#timeouts KeyVaultManagedHardwareSecurityModuleRoleDefinition#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

&keyvaultmanagedhardwaresecuritymoduleroledefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission {
	Actions: *[]*string,
	DataActions: *[]*string,
	NotActions: *[]*string,
	NotDataActions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.actions">Actions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.dataActions">DataActions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#data_actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notActions">NotActions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notDataActions">NotDataActions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_data_actions}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#actions}.

---

##### `DataActions`<sup>Optional</sup> <a name="DataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.dataActions"></a>

```go
DataActions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#data_actions}.

---

##### `NotActions`<sup>Optional</sup> <a name="NotActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notActions"></a>

```go
NotActions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_actions}.

---

##### `NotDataActions`<sup>Optional</sup> <a name="NotDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notDataActions"></a>

```go
NotDataActions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_data_actions}.

---

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

&keyvaultmanagedhardwaresecuritymoduleroledefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#create KeyVaultManagedHardwareSecurityModuleRoleDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#delete KeyVaultManagedHardwareSecurityModuleRoleDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#read KeyVaultManagedHardwareSecurityModuleRoleDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#update KeyVaultManagedHardwareSecurityModuleRoleDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#create KeyVaultManagedHardwareSecurityModuleRoleDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#delete KeyVaultManagedHardwareSecurityModuleRoleDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#read KeyVaultManagedHardwareSecurityModuleRoleDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#update KeyVaultManagedHardwareSecurityModuleRoleDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

keyvaultmanagedhardwaresecuritymoduleroledefinition.NewKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get"></a>

```go
func Get(index *f64) KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

keyvaultmanagedhardwaresecuritymoduleroledefinition.NewKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetDataActions">ResetDataActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotActions">ResetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotDataActions">ResetNotDataActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetDataActions` <a name="ResetDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetDataActions"></a>

```go
func ResetDataActions()
```

##### `ResetNotActions` <a name="ResetNotActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotActions"></a>

```go
func ResetNotActions()
```

##### `ResetNotDataActions` <a name="ResetNotDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotDataActions"></a>

```go
func ResetNotDataActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActionsInput">DataActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActionsInput">NotActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActionsInput">NotDataActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions">DataActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions">NotActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions">NotDataActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataActionsInput`<sup>Optional</sup> <a name="DataActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActionsInput"></a>

```go
func DataActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotActionsInput`<sup>Optional</sup> <a name="NotActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActionsInput"></a>

```go
func NotActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotDataActionsInput`<sup>Optional</sup> <a name="NotDataActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActionsInput"></a>

```go
func NotDataActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `DataActions`<sup>Required</sup> <a name="DataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions"></a>

```go
func DataActions() *[]*string
```

- *Type:* *[]*string

---

##### `NotActions`<sup>Required</sup> <a name="NotActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions"></a>

```go
func NotActions() *[]*string
```

- *Type:* *[]*string

---

##### `NotDataActions`<sup>Required</sup> <a name="NotDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions"></a>

```go
func NotDataActions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/keyvaultmanagedhardwaresecuritymoduleroledefinition"

keyvaultmanagedhardwaresecuritymoduleroledefinition.NewKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




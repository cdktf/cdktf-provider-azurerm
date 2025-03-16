# `keyVaultManagedHardwareSecurityModuleKey` Submodule <a name="`keyVaultManagedHardwareSecurityModuleKey` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleKey <a name="KeyVaultManagedHardwareSecurityModuleKey" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key azurerm_key_vault_managed_hardware_security_module_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedhardwaresecuritymodulekey"

keyvaultmanagedhardwaresecuritymodulekey.NewKeyVaultManagedHardwareSecurityModuleKey(scope Construct, id *string, config KeyVaultManagedHardwareSecurityModuleKeyConfig) KeyVaultManagedHardwareSecurityModuleKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig">KeyVaultManagedHardwareSecurityModuleKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig">KeyVaultManagedHardwareSecurityModuleKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetCurve">ResetCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetExpirationDate">ResetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetNotBeforeDate">ResetNotBeforeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.putTimeouts"></a>

```go
func PutTimeouts(value KeyVaultManagedHardwareSecurityModuleKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

---

##### `ResetCurve` <a name="ResetCurve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetCurve"></a>

```go
func ResetCurve()
```

##### `ResetExpirationDate` <a name="ResetExpirationDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetExpirationDate"></a>

```go
func ResetExpirationDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetId"></a>

```go
func ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetKeySize"></a>

```go
func ResetKeySize()
```

##### `ResetNotBeforeDate` <a name="ResetNotBeforeDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetNotBeforeDate"></a>

```go
func ResetNotBeforeDate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedhardwaresecuritymodulekey"

keyvaultmanagedhardwaresecuritymodulekey.KeyVaultManagedHardwareSecurityModuleKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedhardwaresecuritymodulekey"

keyvaultmanagedhardwaresecuritymodulekey.KeyVaultManagedHardwareSecurityModuleKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedhardwaresecuritymodulekey"

keyvaultmanagedhardwaresecuritymodulekey.KeyVaultManagedHardwareSecurityModuleKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedhardwaresecuritymodulekey"

keyvaultmanagedhardwaresecuritymodulekey.KeyVaultManagedHardwareSecurityModuleKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KeyVaultManagedHardwareSecurityModuleKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.versionedId">VersionedId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.curveInput">CurveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.expirationDateInput">ExpirationDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyOptsInput">KeyOptsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keySizeInput">KeySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.managedHsmIdInput">ManagedHsmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDateInput">NotBeforeDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.curve">Curve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyOpts">KeyOpts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keySize">KeySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.managedHsmId">ManagedHsmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDate">NotBeforeDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.timeouts"></a>

```go
func Timeouts() KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference</a>

---

##### `VersionedId`<sup>Required</sup> <a name="VersionedId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.versionedId"></a>

```go
func VersionedId() *string
```

- *Type:* *string

---

##### `CurveInput`<sup>Optional</sup> <a name="CurveInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.curveInput"></a>

```go
func CurveInput() *string
```

- *Type:* *string

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.expirationDateInput"></a>

```go
func ExpirationDateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyOptsInput`<sup>Optional</sup> <a name="KeyOptsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyOptsInput"></a>

```go
func KeyOptsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keySizeInput"></a>

```go
func KeySizeInput() *f64
```

- *Type:* *f64

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `ManagedHsmIdInput`<sup>Optional</sup> <a name="ManagedHsmIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.managedHsmIdInput"></a>

```go
func ManagedHsmIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotBeforeDateInput`<sup>Optional</sup> <a name="NotBeforeDateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDateInput"></a>

```go
func NotBeforeDateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.curve"></a>

```go
func Curve() *string
```

- *Type:* *string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyOpts`<sup>Required</sup> <a name="KeyOpts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyOpts"></a>

```go
func KeyOpts() *[]*string
```

- *Type:* *[]*string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keySize"></a>

```go
func KeySize() *f64
```

- *Type:* *f64

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `ManagedHsmId`<sup>Required</sup> <a name="ManagedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.managedHsmId"></a>

```go
func ManagedHsmId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotBeforeDate`<sup>Required</sup> <a name="NotBeforeDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDate"></a>

```go
func NotBeforeDate() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleKeyConfig <a name="KeyVaultManagedHardwareSecurityModuleKeyConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedhardwaresecuritymodulekey"

&keyvaultmanagedhardwaresecuritymodulekey.KeyVaultManagedHardwareSecurityModuleKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyOpts: *[]*string,
	KeyType: *string,
	ManagedHsmId: *string,
	Name: *string,
	Curve: *string,
	ExpirationDate: *string,
	Id: *string,
	KeySize: *f64,
	NotBeforeDate: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keyOpts">KeyOpts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#key_opts KeyVaultManagedHardwareSecurityModuleKey#key_opts}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keyType">KeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#key_type KeyVaultManagedHardwareSecurityModuleKey#key_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.managedHsmId">ManagedHsmId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#managed_hsm_id KeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#name KeyVaultManagedHardwareSecurityModuleKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.curve">Curve</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#curve KeyVaultManagedHardwareSecurityModuleKey#curve}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#expiration_date KeyVaultManagedHardwareSecurityModuleKey#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#id KeyVaultManagedHardwareSecurityModuleKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keySize">KeySize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#key_size KeyVaultManagedHardwareSecurityModuleKey#key_size}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.notBeforeDate">NotBeforeDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#not_before_date KeyVaultManagedHardwareSecurityModuleKey#not_before_date}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#tags KeyVaultManagedHardwareSecurityModuleKey#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyOpts`<sup>Required</sup> <a name="KeyOpts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keyOpts"></a>

```go
KeyOpts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#key_opts KeyVaultManagedHardwareSecurityModuleKey#key_opts}.

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#key_type KeyVaultManagedHardwareSecurityModuleKey#key_type}.

---

##### `ManagedHsmId`<sup>Required</sup> <a name="ManagedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.managedHsmId"></a>

```go
ManagedHsmId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#managed_hsm_id KeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#name KeyVaultManagedHardwareSecurityModuleKey#name}.

---

##### `Curve`<sup>Optional</sup> <a name="Curve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.curve"></a>

```go
Curve *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#curve KeyVaultManagedHardwareSecurityModuleKey#curve}.

---

##### `ExpirationDate`<sup>Optional</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.expirationDate"></a>

```go
ExpirationDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#expiration_date KeyVaultManagedHardwareSecurityModuleKey#expiration_date}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#id KeyVaultManagedHardwareSecurityModuleKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.keySize"></a>

```go
KeySize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#key_size KeyVaultManagedHardwareSecurityModuleKey#key_size}.

---

##### `NotBeforeDate`<sup>Optional</sup> <a name="NotBeforeDate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.notBeforeDate"></a>

```go
NotBeforeDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#not_before_date KeyVaultManagedHardwareSecurityModuleKey#not_before_date}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#tags KeyVaultManagedHardwareSecurityModuleKey#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyConfig.property.timeouts"></a>

```go
Timeouts KeyVaultManagedHardwareSecurityModuleKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts">KeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#timeouts KeyVaultManagedHardwareSecurityModuleKey#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleKeyTimeouts <a name="KeyVaultManagedHardwareSecurityModuleKeyTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedhardwaresecuritymodulekey"

&keyvaultmanagedhardwaresecuritymodulekey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#create KeyVaultManagedHardwareSecurityModuleKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#delete KeyVaultManagedHardwareSecurityModuleKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#read KeyVaultManagedHardwareSecurityModuleKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#update KeyVaultManagedHardwareSecurityModuleKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#create KeyVaultManagedHardwareSecurityModuleKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#delete KeyVaultManagedHardwareSecurityModuleKey#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#read KeyVaultManagedHardwareSecurityModuleKey#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/key_vault_managed_hardware_security_module_key#update KeyVaultManagedHardwareSecurityModuleKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/keyvaultmanagedhardwaresecuritymodulekey"

keyvaultmanagedhardwaresecuritymodulekey.NewKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleKey.KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




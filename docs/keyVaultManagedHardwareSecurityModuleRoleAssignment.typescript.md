# `keyVaultManagedHardwareSecurityModuleRoleAssignment` Submodule <a name="`keyVaultManagedHardwareSecurityModuleRoleAssignment` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleAssignment <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignment" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment azurerm_key_vault_managed_hardware_security_module_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleAssignment } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment(scope: Construct, id: string, config: KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig">KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig">KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleAssignment } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleAssignment } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleAssignment } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleAssignment } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultManagedHardwareSecurityModuleRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmIdInput">managedHsmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmId">managedHsmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedHsmIdInput`<sup>Optional</sup> <a name="managedHsmIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmIdInput"></a>

```typescript
public readonly managedHsmIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionIdInput"></a>

```typescript
public readonly roleDefinitionIdInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmId"></a>

```typescript
public readonly managedHsmId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleAssignment } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleRoleAssignmentConfig: keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.managedHsmId">managedHsmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.principalId">principalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.managedHsmId"></a>

```typescript
public readonly managedHsmId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}.

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#timeouts KeyVaultManagedHardwareSecurityModuleRoleAssignment#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleAssignment } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts: keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#create KeyVaultManagedHardwareSecurityModuleRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#delete KeyVaultManagedHardwareSecurityModuleRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#read KeyVaultManagedHardwareSecurityModuleRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#create KeyVaultManagedHardwareSecurityModuleRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#delete KeyVaultManagedHardwareSecurityModuleRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#read KeyVaultManagedHardwareSecurityModuleRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleAssignment } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

---




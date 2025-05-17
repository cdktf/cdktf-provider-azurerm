# `keyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule <a name="`keyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinition <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinition" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition azurerm_key_vault_managed_hardware_security_module_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition(scope: Construct, id: string, config: KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig">KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig">KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission">putPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetPermission">resetPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermission` <a name="putPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission"></a>

```typescript
public putPermission(value: IResolvable | KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetPermission"></a>

```typescript
public resetPermission(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetRoleName"></a>

```typescript
public resetRoleName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleRoleDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultManagedHardwareSecurityModuleRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission">permission</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId">resourceManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType">roleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmIdInput">managedHsmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permissionInput">permissionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmId">managedHsmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission"></a>

```typescript
public readonly permission: KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a>

---

##### `resourceManagerId`<sup>Required</sup> <a name="resourceManagerId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId"></a>

```typescript
public readonly resourceManagerId: string;
```

- *Type:* string

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType"></a>

```typescript
public readonly roleType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedHsmIdInput`<sup>Optional</sup> <a name="managedHsmIdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmIdInput"></a>

```typescript
public readonly managedHsmIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permissionInput"></a>

```typescript
public readonly permissionInput: IResolvable | KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>[]

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.managedHsmId"></a>

```typescript
public readonly managedHsmId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleRoleDefinitionConfig: keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.managedHsmId">managedHsmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.permission">permission</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>[]</code> | permission block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.roleName">roleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.managedHsmId"></a>

```typescript
public readonly managedHsmId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.permission"></a>

```typescript
public readonly permission: IResolvable | KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>[]

permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#permission KeyVaultManagedHardwareSecurityModuleRoleDefinition#permission}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#timeouts KeyVaultManagedHardwareSecurityModuleRoleDefinition#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleRoleDefinitionPermission: keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.actions">actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.dataActions">dataActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#data_actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notActions">notActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notDataActions">notDataActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_data_actions}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#actions}.

---

##### `dataActions`<sup>Optional</sup> <a name="dataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.dataActions"></a>

```typescript
public readonly dataActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#data_actions}.

---

##### `notActions`<sup>Optional</sup> <a name="notActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_actions}.

---

##### `notDataActions`<sup>Optional</sup> <a name="notDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notDataActions"></a>

```typescript
public readonly notDataActions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_data_actions}.

---

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

const keyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts: keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#create KeyVaultManagedHardwareSecurityModuleRoleDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#delete KeyVaultManagedHardwareSecurityModuleRoleDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#read KeyVaultManagedHardwareSecurityModuleRoleDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#update KeyVaultManagedHardwareSecurityModuleRoleDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#create KeyVaultManagedHardwareSecurityModuleRoleDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#delete KeyVaultManagedHardwareSecurityModuleRoleDefinition#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#read KeyVaultManagedHardwareSecurityModuleRoleDefinition#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/key_vault_managed_hardware_security_module_role_definition#update KeyVaultManagedHardwareSecurityModuleRoleDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get"></a>

```typescript
public get(index: number): KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>[]

---


### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetDataActions">resetDataActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotActions">resetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotDataActions">resetNotDataActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetDataActions` <a name="resetDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetDataActions"></a>

```typescript
public resetDataActions(): void
```

##### `resetNotActions` <a name="resetNotActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotActions"></a>

```typescript
public resetNotActions(): void
```

##### `resetNotDataActions` <a name="resetNotDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotDataActions"></a>

```typescript
public resetNotDataActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActionsInput">dataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActionsInput">notActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActionsInput">notDataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions">dataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions">notActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions">notDataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `dataActionsInput`<sup>Optional</sup> <a name="dataActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActionsInput"></a>

```typescript
public readonly dataActionsInput: string[];
```

- *Type:* string[]

---

##### `notActionsInput`<sup>Optional</sup> <a name="notActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActionsInput"></a>

```typescript
public readonly notActionsInput: string[];
```

- *Type:* string[]

---

##### `notDataActionsInput`<sup>Optional</sup> <a name="notDataActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActionsInput"></a>

```typescript
public readonly notDataActionsInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `dataActions`<sup>Required</sup> <a name="dataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions"></a>

```typescript
public readonly dataActions: string[];
```

- *Type:* string[]

---

##### `notActions`<sup>Required</sup> <a name="notActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions"></a>

```typescript
public readonly notActions: string[];
```

- *Type:* string[]

---

##### `notDataActions`<sup>Required</sup> <a name="notDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions"></a>

```typescript
public readonly notDataActions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission</a>

---


### KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVaultManagedHardwareSecurityModuleRoleDefinition } from '@cdktf/provider-azurerm'

new keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

---




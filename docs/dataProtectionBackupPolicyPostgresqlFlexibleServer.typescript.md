# `dataProtectionBackupPolicyPostgresqlFlexibleServer` Submodule <a name="`dataProtectionBackupPolicyPostgresqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServer <a name="DataProtectionBackupPolicyPostgresqlFlexibleServer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server azurerm_data_protection_backup_policy_postgresql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer(scope: Construct, id: string, config: DataProtectionBackupPolicyPostgresqlFlexibleServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig">DataProtectionBackupPolicyPostgresqlFlexibleServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig">DataProtectionBackupPolicyPostgresqlFlexibleServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule">putDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule">putRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetRetentionRule">resetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultRetentionRule` <a name="putDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule"></a>

```typescript
public putDefaultRetentionRule(value: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---

##### `putRetentionRule` <a name="putRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule"></a>

```typescript
public putRetentionRule(value: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts"></a>

```typescript
public putTimeouts(value: DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetentionRule` <a name="resetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetRetentionRule"></a>

```typescript
public resetRetentionRule(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyPostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataProtectionBackupPolicyPostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupPolicyPostgresqlFlexibleServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupPolicyPostgresqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyPostgresqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRule">defaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRule">retentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervalsInput">backupRepeatingTimeIntervalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRuleInput">defaultRetentionRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRuleInput">retentionRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultRetentionRule`<sup>Required</sup> <a name="defaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRule"></a>

```typescript
public readonly defaultRetentionRule: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference</a>

---

##### `retentionRule`<sup>Required</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRule"></a>

```typescript
public readonly retentionRule: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference</a>

---

##### `backupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="backupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervalsInput"></a>

```typescript
public readonly backupRepeatingTimeIntervalsInput: string[];
```

- *Type:* string[]

---

##### `defaultRetentionRuleInput`<sup>Optional</sup> <a name="defaultRetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRuleInput"></a>

```typescript
public readonly defaultRetentionRuleInput: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retentionRuleInput`<sup>Optional</sup> <a name="retentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRuleInput"></a>

```typescript
public readonly retentionRuleInput: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `backupRepeatingTimeIntervals`<sup>Required</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervals"></a>

```typescript
public readonly backupRepeatingTimeIntervals: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServerConfig <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyPostgresqlFlexibleServerConfig: dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.defaultRetentionRule">defaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.retentionRule">retentionRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>[]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupRepeatingTimeIntervals`<sup>Required</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.backupRepeatingTimeIntervals"></a>

```typescript
public readonly backupRepeatingTimeIntervals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}.

---

##### `defaultRetentionRule`<sup>Required</sup> <a name="defaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.defaultRetentionRule"></a>

```typescript
public readonly defaultRetentionRule: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#default_retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#default_retention_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionRule`<sup>Optional</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.retentionRule"></a>

```typescript
public readonly retentionRule: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>[]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#timeouts DataProtectionBackupPolicyPostgresqlFlexibleServer#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule: dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.property.lifeCycle">lifeCycle</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]</code> | life_cycle block. |

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.property.lifeCycle"></a>

```typescript
public readonly lifeCycle: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#life_cycle DataProtectionBackupPolicyPostgresqlFlexibleServer#life_cycle}

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle: dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}. |

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule: dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.lifeCycle">lifeCycle</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>[]</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#priority DataProtectionBackupPolicyPostgresqlFlexibleServer#priority}. |

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.criteria"></a>

```typescript
public readonly criteria: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#criteria}

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.lifeCycle"></a>

```typescript
public readonly lifeCycle: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>[]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#life_cycle DataProtectionBackupPolicyPostgresqlFlexibleServer#life_cycle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#priority DataProtectionBackupPolicyPostgresqlFlexibleServer#priority}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria: dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria">absoluteCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#absolute_criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#days_of_week DataProtectionBackupPolicyPostgresqlFlexibleServer#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear">monthsOfYear</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#months_of_year DataProtectionBackupPolicyPostgresqlFlexibleServer#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyPostgresqlFlexibleServer#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#weeks_of_month DataProtectionBackupPolicyPostgresqlFlexibleServer#weeks_of_month}. |

---

##### `absoluteCriteria`<sup>Optional</sup> <a name="absoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria"></a>

```typescript
public readonly absoluteCriteria: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#absolute_criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#absolute_criteria}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#days_of_week DataProtectionBackupPolicyPostgresqlFlexibleServer#days_of_week}.

---

##### `monthsOfYear`<sup>Optional</sup> <a name="monthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear"></a>

```typescript
public readonly monthsOfYear: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#months_of_year DataProtectionBackupPolicyPostgresqlFlexibleServer#months_of_year}.

---

##### `scheduledBackupTimes`<sup>Optional</sup> <a name="scheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```typescript
public readonly scheduledBackupTimes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyPostgresqlFlexibleServer#scheduled_backup_times}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#weeks_of_month DataProtectionBackupPolicyPostgresqlFlexibleServer#weeks_of_month}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle: dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}. |

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts: dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#create DataProtectionBackupPolicyPostgresqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#delete DataProtectionBackupPolicyPostgresqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#read DataProtectionBackupPolicyPostgresqlFlexibleServer#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#create DataProtectionBackupPolicyPostgresqlFlexibleServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#delete DataProtectionBackupPolicyPostgresqlFlexibleServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#read DataProtectionBackupPolicyPostgresqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get"></a>

```typescript
public get(index: number): DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">dataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreTypeInput`<sup>Optional</sup> <a name="dataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```typescript
public readonly dataStoreTypeInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle">putLifeCycle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLifeCycle` <a name="putLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```typescript
public putLifeCycle(value: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle">lifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput">lifeCycleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```typescript
public readonly lifeCycle: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList</a>

---

##### `lifeCycleInput`<sup>Optional</sup> <a name="lifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```typescript
public readonly lifeCycleInput: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">resetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear">resetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">resetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAbsoluteCriteria` <a name="resetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```typescript
public resetAbsoluteCriteria(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetMonthsOfYear` <a name="resetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```typescript
public resetMonthsOfYear(): void
```

##### `resetScheduledBackupTimes` <a name="resetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```typescript
public resetScheduledBackupTimes(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">absoluteCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">monthsOfYearInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">scheduledBackupTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria">absoluteCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear">monthsOfYear</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `absoluteCriteriaInput`<sup>Optional</sup> <a name="absoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```typescript
public readonly absoluteCriteriaInput: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `monthsOfYearInput`<sup>Optional</sup> <a name="monthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```typescript
public readonly monthsOfYearInput: string[];
```

- *Type:* string[]

---

##### `scheduledBackupTimesInput`<sup>Optional</sup> <a name="scheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```typescript
public readonly scheduledBackupTimesInput: string[];
```

- *Type:* string[]

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: string[];
```

- *Type:* string[]

---

##### `absoluteCriteria`<sup>Required</sup> <a name="absoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```typescript
public readonly absoluteCriteria: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `monthsOfYear`<sup>Required</sup> <a name="monthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```typescript
public readonly monthsOfYear: string[];
```

- *Type:* string[]

---

##### `scheduledBackupTimes`<sup>Required</sup> <a name="scheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```typescript
public readonly scheduledBackupTimes: string[];
```

- *Type:* string[]

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get"></a>

```typescript
public get(index: number): DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>[]

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">dataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreTypeInput`<sup>Optional</sup> <a name="dataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```typescript
public readonly dataStoreTypeInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get"></a>

```typescript
public get(index: number): DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>[]

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle">putLifeCycle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteria` <a name="putCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria"></a>

```typescript
public putCriteria(value: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---

##### `putLifeCycle` <a name="putLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle"></a>

```typescript
public putLifeCycle(value: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle">lifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput">lifeCycleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteria"></a>

```typescript
public readonly criteria: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference</a>

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle"></a>

```typescript
public readonly lifeCycle: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---

##### `lifeCycleInput`<sup>Optional</sup> <a name="lifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput"></a>

```typescript
public readonly lifeCycleInput: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyPostgresqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

---




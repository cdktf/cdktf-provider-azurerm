# `dataProtectionBackupPolicyMysqlFlexibleServer` Submodule <a name="`dataProtectionBackupPolicyMysqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyMysqlFlexibleServer <a name="DataProtectionBackupPolicyMysqlFlexibleServer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server azurerm_data_protection_backup_policy_mysql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer(scope: Construct, id: string, config: DataProtectionBackupPolicyMysqlFlexibleServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig">DataProtectionBackupPolicyMysqlFlexibleServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig">DataProtectionBackupPolicyMysqlFlexibleServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putDefaultRetentionRule">putDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putRetentionRule">putRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetRetentionRule">resetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultRetentionRule` <a name="putDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putDefaultRetentionRule"></a>

```typescript
public putDefaultRetentionRule(value: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putDefaultRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

---

##### `putRetentionRule` <a name="putRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putRetentionRule"></a>

```typescript
public putRetentionRule(value: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putRetentionRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts"></a>

```typescript
public putTimeouts(value: DataProtectionBackupPolicyMysqlFlexibleServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetentionRule` <a name="resetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetRetentionRule"></a>

```typescript
public resetRetentionRule(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyMysqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataProtectionBackupPolicyMysqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupPolicyMysqlFlexibleServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupPolicyMysqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyMysqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRule">defaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRule">retentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervalsInput">backupRepeatingTimeIntervalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRuleInput">defaultRetentionRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRuleInput">retentionRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultRetentionRule`<sup>Required</sup> <a name="defaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRule"></a>

```typescript
public readonly defaultRetentionRule: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference</a>

---

##### `retentionRule`<sup>Required</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRule"></a>

```typescript
public readonly retentionRule: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference</a>

---

##### `backupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="backupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervalsInput"></a>

```typescript
public readonly backupRepeatingTimeIntervalsInput: string[];
```

- *Type:* string[]

---

##### `defaultRetentionRuleInput`<sup>Optional</sup> <a name="defaultRetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRuleInput"></a>

```typescript
public readonly defaultRetentionRuleInput: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retentionRuleInput`<sup>Optional</sup> <a name="retentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRuleInput"></a>

```typescript
public readonly retentionRuleInput: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `backupRepeatingTimeIntervals`<sup>Required</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervals"></a>

```typescript
public readonly backupRepeatingTimeIntervals: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyMysqlFlexibleServerConfig <a name="DataProtectionBackupPolicyMysqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyMysqlFlexibleServerConfig: dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.backupRepeatingTimeIntervals">backupRepeatingTimeIntervals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyMysqlFlexibleServer#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.defaultRetentionRule">defaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#vault_id DataProtectionBackupPolicyMysqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#id DataProtectionBackupPolicyMysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.retentionRule">retentionRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#time_zone DataProtectionBackupPolicyMysqlFlexibleServer#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupRepeatingTimeIntervals`<sup>Required</sup> <a name="backupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.backupRepeatingTimeIntervals"></a>

```typescript
public readonly backupRepeatingTimeIntervals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyMysqlFlexibleServer#backup_repeating_time_intervals}.

---

##### `defaultRetentionRule`<sup>Required</sup> <a name="defaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.defaultRetentionRule"></a>

```typescript
public readonly defaultRetentionRule: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#default_retention_rule DataProtectionBackupPolicyMysqlFlexibleServer#default_retention_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#vault_id DataProtectionBackupPolicyMysqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#id DataProtectionBackupPolicyMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionRule`<sup>Optional</sup> <a name="retentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.retentionRule"></a>

```typescript
public readonly retentionRule: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#retention_rule DataProtectionBackupPolicyMysqlFlexibleServer#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupPolicyMysqlFlexibleServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#timeouts DataProtectionBackupPolicyMysqlFlexibleServer#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#time_zone DataProtectionBackupPolicyMysqlFlexibleServer#time_zone}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule: dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule.property.lifeCycle">lifeCycle</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]</code> | life_cycle block. |

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule.property.lifeCycle"></a>

```typescript
public readonly lifeCycle: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#life_cycle DataProtectionBackupPolicyMysqlFlexibleServer#life_cycle}

---

### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle: dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}. |

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyMysqlFlexibleServerRetentionRule: dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.lifeCycle">lifeCycle</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#priority DataProtectionBackupPolicyMysqlFlexibleServer#priority}. |

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.criteria"></a>

```typescript
public readonly criteria: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#criteria DataProtectionBackupPolicyMysqlFlexibleServer#criteria}

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.lifeCycle"></a>

```typescript
public readonly lifeCycle: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#life_cycle DataProtectionBackupPolicyMysqlFlexibleServer#life_cycle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#priority DataProtectionBackupPolicyMysqlFlexibleServer#priority}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria: dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria">absoluteCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#absolute_criteria DataProtectionBackupPolicyMysqlFlexibleServer#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#days_of_week DataProtectionBackupPolicyMysqlFlexibleServer#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear">monthsOfYear</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#months_of_year DataProtectionBackupPolicyMysqlFlexibleServer#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyMysqlFlexibleServer#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#weeks_of_month DataProtectionBackupPolicyMysqlFlexibleServer#weeks_of_month}. |

---

##### `absoluteCriteria`<sup>Optional</sup> <a name="absoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria"></a>

```typescript
public readonly absoluteCriteria: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#absolute_criteria DataProtectionBackupPolicyMysqlFlexibleServer#absolute_criteria}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#days_of_week DataProtectionBackupPolicyMysqlFlexibleServer#days_of_week}.

---

##### `monthsOfYear`<sup>Optional</sup> <a name="monthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear"></a>

```typescript
public readonly monthsOfYear: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#months_of_year DataProtectionBackupPolicyMysqlFlexibleServer#months_of_year}.

---

##### `scheduledBackupTimes`<sup>Optional</sup> <a name="scheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```typescript
public readonly scheduledBackupTimes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyMysqlFlexibleServer#scheduled_backup_times}.

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#weeks_of_month DataProtectionBackupPolicyMysqlFlexibleServer#weeks_of_month}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle: dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}. |

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerTimeouts <a name="DataProtectionBackupPolicyMysqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

const dataProtectionBackupPolicyMysqlFlexibleServerTimeouts: dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#create DataProtectionBackupPolicyMysqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#delete DataProtectionBackupPolicyMysqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#read DataProtectionBackupPolicyMysqlFlexibleServer#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#create DataProtectionBackupPolicyMysqlFlexibleServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#delete DataProtectionBackupPolicyMysqlFlexibleServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#read DataProtectionBackupPolicyMysqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.get"></a>

```typescript
public get(index: number): DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

---


### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">dataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreTypeInput`<sup>Optional</sup> <a name="dataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```typescript
public readonly dataStoreTypeInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle">putLifeCycle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLifeCycle` <a name="putLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```typescript
public putLifeCycle(value: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle">lifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput">lifeCycleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```typescript
public readonly lifeCycle: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList</a>

---

##### `lifeCycleInput`<sup>Optional</sup> <a name="lifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```typescript
public readonly lifeCycleInput: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">resetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear">resetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">resetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAbsoluteCriteria` <a name="resetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```typescript
public resetAbsoluteCriteria(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetMonthsOfYear` <a name="resetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```typescript
public resetMonthsOfYear(): void
```

##### `resetScheduledBackupTimes` <a name="resetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```typescript
public resetScheduledBackupTimes(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">absoluteCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">monthsOfYearInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">scheduledBackupTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria">absoluteCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear">monthsOfYear</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">scheduledBackupTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `absoluteCriteriaInput`<sup>Optional</sup> <a name="absoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```typescript
public readonly absoluteCriteriaInput: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `monthsOfYearInput`<sup>Optional</sup> <a name="monthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```typescript
public readonly monthsOfYearInput: string[];
```

- *Type:* string[]

---

##### `scheduledBackupTimesInput`<sup>Optional</sup> <a name="scheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```typescript
public readonly scheduledBackupTimesInput: string[];
```

- *Type:* string[]

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: string[];
```

- *Type:* string[]

---

##### `absoluteCriteria`<sup>Required</sup> <a name="absoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```typescript
public readonly absoluteCriteria: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `monthsOfYear`<sup>Required</sup> <a name="monthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```typescript
public readonly monthsOfYear: string[];
```

- *Type:* string[]

---

##### `scheduledBackupTimes`<sup>Required</sup> <a name="scheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```typescript
public readonly scheduledBackupTimes: string[];
```

- *Type:* string[]

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.get"></a>

```typescript
public get(index: number): DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">dataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType">dataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreTypeInput`<sup>Optional</sup> <a name="dataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```typescript
public readonly dataStoreTypeInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `dataStoreType`<sup>Required</sup> <a name="dataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```typescript
public readonly dataStoreType: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.get"></a>

```typescript
public get(index: number): DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putLifeCycle">putLifeCycle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteria` <a name="putCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria"></a>

```typescript
public putCriteria(value: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

---

##### `putLifeCycle` <a name="putLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putLifeCycle"></a>

```typescript
public putLifeCycle(value: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle">lifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput">lifeCycleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteria"></a>

```typescript
public readonly criteria: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference</a>

---

##### `lifeCycle`<sup>Required</sup> <a name="lifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle"></a>

```typescript
public readonly lifeCycle: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

---

##### `lifeCycleInput`<sup>Optional</sup> <a name="lifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput"></a>

```typescript
public readonly lifeCycleInput: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupPolicyMysqlFlexibleServer } from '@cdktf/provider-azurerm'

new dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupPolicyMysqlFlexibleServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

---




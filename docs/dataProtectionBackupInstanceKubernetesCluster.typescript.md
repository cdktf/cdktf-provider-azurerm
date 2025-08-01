# `dataProtectionBackupInstanceKubernetesCluster` Submodule <a name="`dataProtectionBackupInstanceKubernetesCluster` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceKubernetesCluster <a name="DataProtectionBackupInstanceKubernetesCluster" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster azurerm_data_protection_backup_instance_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

new dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster(scope: Construct, id: string, config: DataProtectionBackupInstanceKubernetesClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig">DataProtectionBackupInstanceKubernetesClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig">DataProtectionBackupInstanceKubernetesClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putBackupDatasourceParameters">putBackupDatasourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetBackupDatasourceParameters">resetBackupDatasourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupDatasourceParameters` <a name="putBackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putBackupDatasourceParameters"></a>

```typescript
public putBackupDatasourceParameters(value: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putBackupDatasourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: DataProtectionBackupInstanceKubernetesClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

---

##### `resetBackupDatasourceParameters` <a name="resetBackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetBackupDatasourceParameters"></a>

```typescript
public resetBackupDatasourceParameters(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupInstanceKubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataProtectionBackupInstanceKubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupInstanceKubernetesCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupInstanceKubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstanceKubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParameters">backupDatasourceParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference">DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParametersInput">backupDatasourceParametersInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterIdInput">kubernetesClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupNameInput">snapshotResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupName">snapshotResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupDatasourceParameters`<sup>Required</sup> <a name="backupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParameters"></a>

```typescript
public readonly backupDatasourceParameters: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference">DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference</a>

---

##### `backupDatasourceParametersInput`<sup>Optional</sup> <a name="backupDatasourceParametersInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParametersInput"></a>

```typescript
public readonly backupDatasourceParametersInput: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyIdInput"></a>

```typescript
public readonly backupPolicyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesClusterIdInput`<sup>Optional</sup> <a name="kubernetesClusterIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterIdInput"></a>

```typescript
public readonly kubernetesClusterIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `snapshotResourceGroupNameInput`<sup>Optional</sup> <a name="snapshotResourceGroupNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupNameInput"></a>

```typescript
public readonly snapshotResourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataProtectionBackupInstanceKubernetesClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterId"></a>

```typescript
public readonly kubernetesClusterId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `snapshotResourceGroupName`<sup>Required</sup> <a name="snapshotResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupName"></a>

```typescript
public readonly snapshotResourceGroupName: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters <a name="DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

const dataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters: dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.clusterScopedResourcesEnabled">clusterScopedResourcesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#cluster_scoped_resources_enabled DataProtectionBackupInstanceKubernetesCluster#cluster_scoped_resources_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedNamespaces">excludedNamespaces</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_namespaces DataProtectionBackupInstanceKubernetesCluster#excluded_namespaces}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedResourceTypes">excludedResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_resource_types DataProtectionBackupInstanceKubernetesCluster#excluded_resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedNamespaces">includedNamespaces</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_namespaces DataProtectionBackupInstanceKubernetesCluster#included_namespaces}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedResourceTypes">includedResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_resource_types DataProtectionBackupInstanceKubernetesCluster#included_resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.labelSelectors">labelSelectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#label_selectors DataProtectionBackupInstanceKubernetesCluster#label_selectors}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.volumeSnapshotEnabled">volumeSnapshotEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#volume_snapshot_enabled DataProtectionBackupInstanceKubernetesCluster#volume_snapshot_enabled}. |

---

##### `clusterScopedResourcesEnabled`<sup>Optional</sup> <a name="clusterScopedResourcesEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.clusterScopedResourcesEnabled"></a>

```typescript
public readonly clusterScopedResourcesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#cluster_scoped_resources_enabled DataProtectionBackupInstanceKubernetesCluster#cluster_scoped_resources_enabled}.

---

##### `excludedNamespaces`<sup>Optional</sup> <a name="excludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedNamespaces"></a>

```typescript
public readonly excludedNamespaces: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_namespaces DataProtectionBackupInstanceKubernetesCluster#excluded_namespaces}.

---

##### `excludedResourceTypes`<sup>Optional</sup> <a name="excludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedResourceTypes"></a>

```typescript
public readonly excludedResourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_resource_types DataProtectionBackupInstanceKubernetesCluster#excluded_resource_types}.

---

##### `includedNamespaces`<sup>Optional</sup> <a name="includedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedNamespaces"></a>

```typescript
public readonly includedNamespaces: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_namespaces DataProtectionBackupInstanceKubernetesCluster#included_namespaces}.

---

##### `includedResourceTypes`<sup>Optional</sup> <a name="includedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedResourceTypes"></a>

```typescript
public readonly includedResourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_resource_types DataProtectionBackupInstanceKubernetesCluster#included_resource_types}.

---

##### `labelSelectors`<sup>Optional</sup> <a name="labelSelectors" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.labelSelectors"></a>

```typescript
public readonly labelSelectors: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#label_selectors DataProtectionBackupInstanceKubernetesCluster#label_selectors}.

---

##### `volumeSnapshotEnabled`<sup>Optional</sup> <a name="volumeSnapshotEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.volumeSnapshotEnabled"></a>

```typescript
public readonly volumeSnapshotEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#volume_snapshot_enabled DataProtectionBackupInstanceKubernetesCluster#volume_snapshot_enabled}.

---

### DataProtectionBackupInstanceKubernetesClusterConfig <a name="DataProtectionBackupInstanceKubernetesClusterConfig" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

const dataProtectionBackupInstanceKubernetesClusterConfig: dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupPolicyId">backupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_policy_id DataProtectionBackupInstanceKubernetesCluster#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#kubernetes_cluster_id DataProtectionBackupInstanceKubernetesCluster#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#location DataProtectionBackupInstanceKubernetesCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#name DataProtectionBackupInstanceKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.snapshotResourceGroupName">snapshotResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#snapshot_resource_group_name DataProtectionBackupInstanceKubernetesCluster#snapshot_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#vault_id DataProtectionBackupInstanceKubernetesCluster#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupDatasourceParameters">backupDatasourceParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | backup_datasource_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#id DataProtectionBackupInstanceKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupPolicyId"></a>

```typescript
public readonly backupPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_policy_id DataProtectionBackupInstanceKubernetesCluster#backup_policy_id}.

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.kubernetesClusterId"></a>

```typescript
public readonly kubernetesClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#kubernetes_cluster_id DataProtectionBackupInstanceKubernetesCluster#kubernetes_cluster_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#location DataProtectionBackupInstanceKubernetesCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#name DataProtectionBackupInstanceKubernetesCluster#name}.

---

##### `snapshotResourceGroupName`<sup>Required</sup> <a name="snapshotResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.snapshotResourceGroupName"></a>

```typescript
public readonly snapshotResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#snapshot_resource_group_name DataProtectionBackupInstanceKubernetesCluster#snapshot_resource_group_name}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#vault_id DataProtectionBackupInstanceKubernetesCluster#vault_id}.

---

##### `backupDatasourceParameters`<sup>Optional</sup> <a name="backupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupDatasourceParameters"></a>

```typescript
public readonly backupDatasourceParameters: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

backup_datasource_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_datasource_parameters DataProtectionBackupInstanceKubernetesCluster#backup_datasource_parameters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#id DataProtectionBackupInstanceKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataProtectionBackupInstanceKubernetesClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#timeouts DataProtectionBackupInstanceKubernetesCluster#timeouts}

---

### DataProtectionBackupInstanceKubernetesClusterTimeouts <a name="DataProtectionBackupInstanceKubernetesClusterTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

const dataProtectionBackupInstanceKubernetesClusterTimeouts: dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#create DataProtectionBackupInstanceKubernetesCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#delete DataProtectionBackupInstanceKubernetesCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#read DataProtectionBackupInstanceKubernetesCluster#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#create DataProtectionBackupInstanceKubernetesCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#delete DataProtectionBackupInstanceKubernetesCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/data_protection_backup_instance_kubernetes_cluster#read DataProtectionBackupInstanceKubernetesCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference <a name="DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

new dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetClusterScopedResourcesEnabled">resetClusterScopedResourcesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedNamespaces">resetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedResourceTypes">resetExcludedResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedNamespaces">resetIncludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedResourceTypes">resetIncludedResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetLabelSelectors">resetLabelSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetVolumeSnapshotEnabled">resetVolumeSnapshotEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterScopedResourcesEnabled` <a name="resetClusterScopedResourcesEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetClusterScopedResourcesEnabled"></a>

```typescript
public resetClusterScopedResourcesEnabled(): void
```

##### `resetExcludedNamespaces` <a name="resetExcludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedNamespaces"></a>

```typescript
public resetExcludedNamespaces(): void
```

##### `resetExcludedResourceTypes` <a name="resetExcludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedResourceTypes"></a>

```typescript
public resetExcludedResourceTypes(): void
```

##### `resetIncludedNamespaces` <a name="resetIncludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedNamespaces"></a>

```typescript
public resetIncludedNamespaces(): void
```

##### `resetIncludedResourceTypes` <a name="resetIncludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedResourceTypes"></a>

```typescript
public resetIncludedResourceTypes(): void
```

##### `resetLabelSelectors` <a name="resetLabelSelectors" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetLabelSelectors"></a>

```typescript
public resetLabelSelectors(): void
```

##### `resetVolumeSnapshotEnabled` <a name="resetVolumeSnapshotEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetVolumeSnapshotEnabled"></a>

```typescript
public resetVolumeSnapshotEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabledInput">clusterScopedResourcesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespacesInput">excludedNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypesInput">excludedResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespacesInput">includedNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypesInput">includedResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectorsInput">labelSelectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabledInput">volumeSnapshotEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabled">clusterScopedResourcesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespaces">excludedNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypes">excludedResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespaces">includedNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypes">includedResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectors">labelSelectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabled">volumeSnapshotEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterScopedResourcesEnabledInput`<sup>Optional</sup> <a name="clusterScopedResourcesEnabledInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabledInput"></a>

```typescript
public readonly clusterScopedResourcesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedNamespacesInput`<sup>Optional</sup> <a name="excludedNamespacesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespacesInput"></a>

```typescript
public readonly excludedNamespacesInput: string[];
```

- *Type:* string[]

---

##### `excludedResourceTypesInput`<sup>Optional</sup> <a name="excludedResourceTypesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypesInput"></a>

```typescript
public readonly excludedResourceTypesInput: string[];
```

- *Type:* string[]

---

##### `includedNamespacesInput`<sup>Optional</sup> <a name="includedNamespacesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespacesInput"></a>

```typescript
public readonly includedNamespacesInput: string[];
```

- *Type:* string[]

---

##### `includedResourceTypesInput`<sup>Optional</sup> <a name="includedResourceTypesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypesInput"></a>

```typescript
public readonly includedResourceTypesInput: string[];
```

- *Type:* string[]

---

##### `labelSelectorsInput`<sup>Optional</sup> <a name="labelSelectorsInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectorsInput"></a>

```typescript
public readonly labelSelectorsInput: string[];
```

- *Type:* string[]

---

##### `volumeSnapshotEnabledInput`<sup>Optional</sup> <a name="volumeSnapshotEnabledInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabledInput"></a>

```typescript
public readonly volumeSnapshotEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterScopedResourcesEnabled`<sup>Required</sup> <a name="clusterScopedResourcesEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabled"></a>

```typescript
public readonly clusterScopedResourcesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedNamespaces`<sup>Required</sup> <a name="excludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespaces"></a>

```typescript
public readonly excludedNamespaces: string[];
```

- *Type:* string[]

---

##### `excludedResourceTypes`<sup>Required</sup> <a name="excludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypes"></a>

```typescript
public readonly excludedResourceTypes: string[];
```

- *Type:* string[]

---

##### `includedNamespaces`<sup>Required</sup> <a name="includedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespaces"></a>

```typescript
public readonly includedNamespaces: string[];
```

- *Type:* string[]

---

##### `includedResourceTypes`<sup>Required</sup> <a name="includedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypes"></a>

```typescript
public readonly includedResourceTypes: string[];
```

- *Type:* string[]

---

##### `labelSelectors`<sup>Required</sup> <a name="labelSelectors" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectors"></a>

```typescript
public readonly labelSelectors: string[];
```

- *Type:* string[]

---

##### `volumeSnapshotEnabled`<sup>Required</sup> <a name="volumeSnapshotEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabled"></a>

```typescript
public readonly volumeSnapshotEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

---


### DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference <a name="DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataProtectionBackupInstanceKubernetesCluster } from '@cdktf/provider-azurerm'

new dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataProtectionBackupInstanceKubernetesClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

---




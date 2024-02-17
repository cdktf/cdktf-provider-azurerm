# `serviceFabricManagedCluster` Submodule <a name="`serviceFabricManagedCluster` Submodule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceFabricManagedCluster <a name="ServiceFabricManagedCluster" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster azurerm_service_fabric_managed_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedCluster(scope: Construct, id: string, config: ServiceFabricManagedClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig">ServiceFabricManagedClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig">ServiceFabricManagedClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putCustomFabricSetting">putCustomFabricSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putLbRule">putLbRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putNodeType">putNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetBackupServiceEnabled">resetBackupServiceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetCustomFabricSetting">resetCustomFabricSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetDnsServiceEnabled">resetDnsServiceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetUpgradeWave">resetUpgradeWave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putAuthentication"></a>

```typescript
public putAuthentication(value: ServiceFabricManagedClusterAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a>

---

##### `putCustomFabricSetting` <a name="putCustomFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putCustomFabricSetting"></a>

```typescript
public putCustomFabricSetting(value: IResolvable | ServiceFabricManagedClusterCustomFabricSetting[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putCustomFabricSetting.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting">ServiceFabricManagedClusterCustomFabricSetting</a>[]

---

##### `putLbRule` <a name="putLbRule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putLbRule"></a>

```typescript
public putLbRule(value: IResolvable | ServiceFabricManagedClusterLbRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putLbRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule">ServiceFabricManagedClusterLbRule</a>[]

---

##### `putNodeType` <a name="putNodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putNodeType"></a>

```typescript
public putNodeType(value: IResolvable | ServiceFabricManagedClusterNodeType[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putNodeType.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType">ServiceFabricManagedClusterNodeType</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ServiceFabricManagedClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetBackupServiceEnabled` <a name="resetBackupServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetBackupServiceEnabled"></a>

```typescript
public resetBackupServiceEnabled(): void
```

##### `resetCustomFabricSetting` <a name="resetCustomFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetCustomFabricSetting"></a>

```typescript
public resetCustomFabricSetting(): void
```

##### `resetDnsName` <a name="resetDnsName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetDnsName"></a>

```typescript
public resetDnsName(): void
```

##### `resetDnsServiceEnabled` <a name="resetDnsServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetDnsServiceEnabled"></a>

```typescript
public resetDnsServiceEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetNodeType"></a>

```typescript
public resetNodeType(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetSku"></a>

```typescript
public resetSku(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgradeWave` <a name="resetUpgradeWave" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetUpgradeWave"></a>

```typescript
public resetUpgradeWave(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceFabricManagedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isConstruct"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

serviceFabricManagedCluster.ServiceFabricManagedCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformElement"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformResource"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.generateConfigForImport"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

serviceFabricManagedCluster.ServiceFabricManagedCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceFabricManagedCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceFabricManagedCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceFabricManagedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceFabricManagedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference">ServiceFabricManagedClusterAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.customFabricSetting">customFabricSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList">ServiceFabricManagedClusterCustomFabricSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lbRule">lbRule</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList">ServiceFabricManagedClusterLbRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nodeType">nodeType</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList">ServiceFabricManagedClusterNodeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference">ServiceFabricManagedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.backupServiceEnabledInput">backupServiceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.clientConnectionPortInput">clientConnectionPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.customFabricSettingInput">customFabricSettingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting">ServiceFabricManagedClusterCustomFabricSetting</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsServiceEnabledInput">dnsServiceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.httpGatewayPortInput">httpGatewayPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lbRuleInput">lbRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule">ServiceFabricManagedClusterLbRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType">ServiceFabricManagedClusterNodeType</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.upgradeWaveInput">upgradeWaveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.backupServiceEnabled">backupServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.clientConnectionPort">clientConnectionPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsServiceEnabled">dnsServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.httpGatewayPort">httpGatewayPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.upgradeWave">upgradeWave</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.authentication"></a>

```typescript
public readonly authentication: ServiceFabricManagedClusterAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference">ServiceFabricManagedClusterAuthenticationOutputReference</a>

---

##### `customFabricSetting`<sup>Required</sup> <a name="customFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.customFabricSetting"></a>

```typescript
public readonly customFabricSetting: ServiceFabricManagedClusterCustomFabricSettingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList">ServiceFabricManagedClusterCustomFabricSettingList</a>

---

##### `lbRule`<sup>Required</sup> <a name="lbRule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lbRule"></a>

```typescript
public readonly lbRule: ServiceFabricManagedClusterLbRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList">ServiceFabricManagedClusterLbRuleList</a>

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nodeType"></a>

```typescript
public readonly nodeType: ServiceFabricManagedClusterNodeTypeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList">ServiceFabricManagedClusterNodeTypeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceFabricManagedClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference">ServiceFabricManagedClusterTimeoutsOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: ServiceFabricManagedClusterAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a>

---

##### `backupServiceEnabledInput`<sup>Optional</sup> <a name="backupServiceEnabledInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.backupServiceEnabledInput"></a>

```typescript
public readonly backupServiceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientConnectionPortInput`<sup>Optional</sup> <a name="clientConnectionPortInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.clientConnectionPortInput"></a>

```typescript
public readonly clientConnectionPortInput: number;
```

- *Type:* number

---

##### `customFabricSettingInput`<sup>Optional</sup> <a name="customFabricSettingInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.customFabricSettingInput"></a>

```typescript
public readonly customFabricSettingInput: IResolvable | ServiceFabricManagedClusterCustomFabricSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting">ServiceFabricManagedClusterCustomFabricSetting</a>[]

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `dnsServiceEnabledInput`<sup>Optional</sup> <a name="dnsServiceEnabledInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsServiceEnabledInput"></a>

```typescript
public readonly dnsServiceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpGatewayPortInput`<sup>Optional</sup> <a name="httpGatewayPortInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.httpGatewayPortInput"></a>

```typescript
public readonly httpGatewayPortInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lbRuleInput`<sup>Optional</sup> <a name="lbRuleInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.lbRuleInput"></a>

```typescript
public readonly lbRuleInput: IResolvable | ServiceFabricManagedClusterLbRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule">ServiceFabricManagedClusterLbRule</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: IResolvable | ServiceFabricManagedClusterNodeType[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType">ServiceFabricManagedClusterNodeType</a>[]

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServiceFabricManagedClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a>

---

##### `upgradeWaveInput`<sup>Optional</sup> <a name="upgradeWaveInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.upgradeWaveInput"></a>

```typescript
public readonly upgradeWaveInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `backupServiceEnabled`<sup>Required</sup> <a name="backupServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.backupServiceEnabled"></a>

```typescript
public readonly backupServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientConnectionPort`<sup>Required</sup> <a name="clientConnectionPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.clientConnectionPort"></a>

```typescript
public readonly clientConnectionPort: number;
```

- *Type:* number

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `dnsServiceEnabled`<sup>Required</sup> <a name="dnsServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.dnsServiceEnabled"></a>

```typescript
public readonly dnsServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpGatewayPort`<sup>Required</sup> <a name="httpGatewayPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.httpGatewayPort"></a>

```typescript
public readonly httpGatewayPort: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `upgradeWave`<sup>Required</sup> <a name="upgradeWave" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.upgradeWave"></a>

```typescript
public readonly upgradeWave: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceFabricManagedClusterAuthentication <a name="ServiceFabricManagedClusterAuthentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterAuthentication: serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.property.certificate">certificate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate">ServiceFabricManagedClusterAuthenticationCertificate</a>[]</code> | certificate block. |

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: ServiceFabricManagedClusterAuthenticationActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#active_directory ServiceFabricManagedCluster#active_directory}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication.property.certificate"></a>

```typescript
public readonly certificate: IResolvable | ServiceFabricManagedClusterAuthenticationCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate">ServiceFabricManagedClusterAuthenticationCertificate</a>[]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#certificate ServiceFabricManagedCluster#certificate}

---

### ServiceFabricManagedClusterAuthenticationActiveDirectory <a name="ServiceFabricManagedClusterAuthenticationActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterAuthenticationActiveDirectory: serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.clientApplicationId">clientApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#client_application_id ServiceFabricManagedCluster#client_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.clusterApplicationId">clusterApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#cluster_application_id ServiceFabricManagedCluster#cluster_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#tenant_id ServiceFabricManagedCluster#tenant_id}. |

---

##### `clientApplicationId`<sup>Required</sup> <a name="clientApplicationId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.clientApplicationId"></a>

```typescript
public readonly clientApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#client_application_id ServiceFabricManagedCluster#client_application_id}.

---

##### `clusterApplicationId`<sup>Required</sup> <a name="clusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.clusterApplicationId"></a>

```typescript
public readonly clusterApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#cluster_application_id ServiceFabricManagedCluster#cluster_application_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#tenant_id ServiceFabricManagedCluster#tenant_id}.

---

### ServiceFabricManagedClusterAuthenticationCertificate <a name="ServiceFabricManagedClusterAuthenticationCertificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterAuthenticationCertificate: serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.thumbprint">thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#thumbprint ServiceFabricManagedCluster#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#type ServiceFabricManagedCluster#type}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.commonName">commonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#common_name ServiceFabricManagedCluster#common_name}. |

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#thumbprint ServiceFabricManagedCluster#thumbprint}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#type ServiceFabricManagedCluster#type}.

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#common_name ServiceFabricManagedCluster#common_name}.

---

### ServiceFabricManagedClusterConfig <a name="ServiceFabricManagedClusterConfig" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterConfig: serviceFabricManagedCluster.ServiceFabricManagedClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.clientConnectionPort">clientConnectionPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#client_connection_port ServiceFabricManagedCluster#client_connection_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.httpGatewayPort">httpGatewayPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#http_gateway_port ServiceFabricManagedCluster#http_gateway_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.lbRule">lbRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule">ServiceFabricManagedClusterLbRule</a>[]</code> | lb_rule block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#location ServiceFabricManagedCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#resource_group_name ServiceFabricManagedCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.backupServiceEnabled">backupServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#backup_service_enabled ServiceFabricManagedCluster#backup_service_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.customFabricSetting">customFabricSetting</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting">ServiceFabricManagedClusterCustomFabricSetting</a>[]</code> | custom_fabric_setting block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dnsName">dnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#dns_name ServiceFabricManagedCluster#dns_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dnsServiceEnabled">dnsServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#dns_service_enabled ServiceFabricManagedCluster#dns_service_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#id ServiceFabricManagedCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.nodeType">nodeType</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType">ServiceFabricManagedClusterNodeType</a>[]</code> | node_type block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#password ServiceFabricManagedCluster#password}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#sku ServiceFabricManagedCluster#sku}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#tags ServiceFabricManagedCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.upgradeWave">upgradeWave</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#upgrade_wave ServiceFabricManagedCluster#upgrade_wave}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#username ServiceFabricManagedCluster#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientConnectionPort`<sup>Required</sup> <a name="clientConnectionPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.clientConnectionPort"></a>

```typescript
public readonly clientConnectionPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#client_connection_port ServiceFabricManagedCluster#client_connection_port}.

---

##### `httpGatewayPort`<sup>Required</sup> <a name="httpGatewayPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.httpGatewayPort"></a>

```typescript
public readonly httpGatewayPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#http_gateway_port ServiceFabricManagedCluster#http_gateway_port}.

---

##### `lbRule`<sup>Required</sup> <a name="lbRule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.lbRule"></a>

```typescript
public readonly lbRule: IResolvable | ServiceFabricManagedClusterLbRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule">ServiceFabricManagedClusterLbRule</a>[]

lb_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#lb_rule ServiceFabricManagedCluster#lb_rule}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#location ServiceFabricManagedCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#resource_group_name ServiceFabricManagedCluster#resource_group_name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.authentication"></a>

```typescript
public readonly authentication: ServiceFabricManagedClusterAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#authentication ServiceFabricManagedCluster#authentication}

---

##### `backupServiceEnabled`<sup>Optional</sup> <a name="backupServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.backupServiceEnabled"></a>

```typescript
public readonly backupServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#backup_service_enabled ServiceFabricManagedCluster#backup_service_enabled}.

---

##### `customFabricSetting`<sup>Optional</sup> <a name="customFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.customFabricSetting"></a>

```typescript
public readonly customFabricSetting: IResolvable | ServiceFabricManagedClusterCustomFabricSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting">ServiceFabricManagedClusterCustomFabricSetting</a>[]

custom_fabric_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#custom_fabric_setting ServiceFabricManagedCluster#custom_fabric_setting}

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#dns_name ServiceFabricManagedCluster#dns_name}.

---

##### `dnsServiceEnabled`<sup>Optional</sup> <a name="dnsServiceEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.dnsServiceEnabled"></a>

```typescript
public readonly dnsServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#dns_service_enabled ServiceFabricManagedCluster#dns_service_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#id ServiceFabricManagedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.nodeType"></a>

```typescript
public readonly nodeType: IResolvable | ServiceFabricManagedClusterNodeType[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType">ServiceFabricManagedClusterNodeType</a>[]

node_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#node_type ServiceFabricManagedCluster#node_type}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#password ServiceFabricManagedCluster#password}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#sku ServiceFabricManagedCluster#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#tags ServiceFabricManagedCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceFabricManagedClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#timeouts ServiceFabricManagedCluster#timeouts}

---

##### `upgradeWave`<sup>Optional</sup> <a name="upgradeWave" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.upgradeWave"></a>

```typescript
public readonly upgradeWave: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#upgrade_wave ServiceFabricManagedCluster#upgrade_wave}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#username ServiceFabricManagedCluster#username}.

---

### ServiceFabricManagedClusterCustomFabricSetting <a name="ServiceFabricManagedClusterCustomFabricSetting" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterCustomFabricSetting: serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.parameter">parameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#parameter ServiceFabricManagedCluster#parameter}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.section">section</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#section ServiceFabricManagedCluster#section}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#value ServiceFabricManagedCluster#value}. |

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#parameter ServiceFabricManagedCluster#parameter}.

---

##### `section`<sup>Required</sup> <a name="section" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.section"></a>

```typescript
public readonly section: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#section ServiceFabricManagedCluster#section}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#value ServiceFabricManagedCluster#value}.

---

### ServiceFabricManagedClusterLbRule <a name="ServiceFabricManagedClusterLbRule" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterLbRule: serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.backendPort">backendPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#backend_port ServiceFabricManagedCluster#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.frontendPort">frontendPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#frontend_port ServiceFabricManagedCluster#frontend_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.probeProtocol">probeProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#probe_protocol ServiceFabricManagedCluster#probe_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#protocol ServiceFabricManagedCluster#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.probeRequestPath">probeRequestPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#probe_request_path ServiceFabricManagedCluster#probe_request_path}. |

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#backend_port ServiceFabricManagedCluster#backend_port}.

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.frontendPort"></a>

```typescript
public readonly frontendPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#frontend_port ServiceFabricManagedCluster#frontend_port}.

---

##### `probeProtocol`<sup>Required</sup> <a name="probeProtocol" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.probeProtocol"></a>

```typescript
public readonly probeProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#probe_protocol ServiceFabricManagedCluster#probe_protocol}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#protocol ServiceFabricManagedCluster#protocol}.

---

##### `probeRequestPath`<sup>Optional</sup> <a name="probeRequestPath" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule.property.probeRequestPath"></a>

```typescript
public readonly probeRequestPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#probe_request_path ServiceFabricManagedCluster#probe_request_path}.

---

### ServiceFabricManagedClusterNodeType <a name="ServiceFabricManagedClusterNodeType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterNodeType: serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.applicationPortRange">applicationPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#application_port_range ServiceFabricManagedCluster#application_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#data_disk_size_gb ServiceFabricManagedCluster#data_disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.ephemeralPortRange">ephemeralPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#ephemeral_port_range ServiceFabricManagedCluster#ephemeral_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageOffer">vmImageOffer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_image_offer ServiceFabricManagedCluster#vm_image_offer}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImagePublisher">vmImagePublisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_image_publisher ServiceFabricManagedCluster#vm_image_publisher}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageSku">vmImageSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_image_sku ServiceFabricManagedCluster#vm_image_sku}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageVersion">vmImageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_image_version ServiceFabricManagedCluster#vm_image_version}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmInstanceCount">vmInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_instance_count ServiceFabricManagedCluster#vm_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmSize">vmSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_size ServiceFabricManagedCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.capacities">capacities</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#capacities ServiceFabricManagedCluster#capacities}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.dataDiskType">dataDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#data_disk_type ServiceFabricManagedCluster#data_disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.multiplePlacementGroupsEnabled">multiplePlacementGroupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#multiple_placement_groups_enabled ServiceFabricManagedCluster#multiple_placement_groups_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.placementProperties">placementProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#placement_properties ServiceFabricManagedCluster#placement_properties}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#primary ServiceFabricManagedCluster#primary}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.stateless">stateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#stateless ServiceFabricManagedCluster#stateless}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmSecrets">vmSecrets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets">ServiceFabricManagedClusterNodeTypeVmSecrets</a>[]</code> | vm_secrets block. |

---

##### `applicationPortRange`<sup>Required</sup> <a name="applicationPortRange" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.applicationPortRange"></a>

```typescript
public readonly applicationPortRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#application_port_range ServiceFabricManagedCluster#application_port_range}.

---

##### `dataDiskSizeGb`<sup>Required</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.dataDiskSizeGb"></a>

```typescript
public readonly dataDiskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#data_disk_size_gb ServiceFabricManagedCluster#data_disk_size_gb}.

---

##### `ephemeralPortRange`<sup>Required</sup> <a name="ephemeralPortRange" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.ephemeralPortRange"></a>

```typescript
public readonly ephemeralPortRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#ephemeral_port_range ServiceFabricManagedCluster#ephemeral_port_range}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#name ServiceFabricManagedCluster#name}.

---

##### `vmImageOffer`<sup>Required</sup> <a name="vmImageOffer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageOffer"></a>

```typescript
public readonly vmImageOffer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_image_offer ServiceFabricManagedCluster#vm_image_offer}.

---

##### `vmImagePublisher`<sup>Required</sup> <a name="vmImagePublisher" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImagePublisher"></a>

```typescript
public readonly vmImagePublisher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_image_publisher ServiceFabricManagedCluster#vm_image_publisher}.

---

##### `vmImageSku`<sup>Required</sup> <a name="vmImageSku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageSku"></a>

```typescript
public readonly vmImageSku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_image_sku ServiceFabricManagedCluster#vm_image_sku}.

---

##### `vmImageVersion`<sup>Required</sup> <a name="vmImageVersion" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmImageVersion"></a>

```typescript
public readonly vmImageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_image_version ServiceFabricManagedCluster#vm_image_version}.

---

##### `vmInstanceCount`<sup>Required</sup> <a name="vmInstanceCount" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmInstanceCount"></a>

```typescript
public readonly vmInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_instance_count ServiceFabricManagedCluster#vm_instance_count}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_size ServiceFabricManagedCluster#vm_size}.

---

##### `capacities`<sup>Optional</sup> <a name="capacities" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.capacities"></a>

```typescript
public readonly capacities: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#capacities ServiceFabricManagedCluster#capacities}.

---

##### `dataDiskType`<sup>Optional</sup> <a name="dataDiskType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.dataDiskType"></a>

```typescript
public readonly dataDiskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#data_disk_type ServiceFabricManagedCluster#data_disk_type}.

---

##### `multiplePlacementGroupsEnabled`<sup>Optional</sup> <a name="multiplePlacementGroupsEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.multiplePlacementGroupsEnabled"></a>

```typescript
public readonly multiplePlacementGroupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#multiple_placement_groups_enabled ServiceFabricManagedCluster#multiple_placement_groups_enabled}.

---

##### `placementProperties`<sup>Optional</sup> <a name="placementProperties" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.placementProperties"></a>

```typescript
public readonly placementProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#placement_properties ServiceFabricManagedCluster#placement_properties}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#primary ServiceFabricManagedCluster#primary}.

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.stateless"></a>

```typescript
public readonly stateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#stateless ServiceFabricManagedCluster#stateless}.

---

##### `vmSecrets`<sup>Optional</sup> <a name="vmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType.property.vmSecrets"></a>

```typescript
public readonly vmSecrets: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets">ServiceFabricManagedClusterNodeTypeVmSecrets</a>[]

vm_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vm_secrets ServiceFabricManagedCluster#vm_secrets}

---

### ServiceFabricManagedClusterNodeTypeVmSecrets <a name="ServiceFabricManagedClusterNodeTypeVmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterNodeTypeVmSecrets: serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.property.certificates">certificates</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates">ServiceFabricManagedClusterNodeTypeVmSecretsCertificates</a>[]</code> | certificates block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vault_id ServiceFabricManagedCluster#vault_id}. |

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.property.certificates"></a>

```typescript
public readonly certificates: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecretsCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates">ServiceFabricManagedClusterNodeTypeVmSecretsCertificates</a>[]

certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#certificates ServiceFabricManagedCluster#certificates}

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#vault_id ServiceFabricManagedCluster#vault_id}.

---

### ServiceFabricManagedClusterNodeTypeVmSecretsCertificates <a name="ServiceFabricManagedClusterNodeTypeVmSecretsCertificates" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterNodeTypeVmSecretsCertificates: serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.property.store">store</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#store ServiceFabricManagedCluster#store}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#url ServiceFabricManagedCluster#url}. |

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.property.store"></a>

```typescript
public readonly store: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#store ServiceFabricManagedCluster#store}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#url ServiceFabricManagedCluster#url}.

---

### ServiceFabricManagedClusterTimeouts <a name="ServiceFabricManagedClusterTimeouts" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

const serviceFabricManagedClusterTimeouts: serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#create ServiceFabricManagedCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#delete ServiceFabricManagedCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#read ServiceFabricManagedCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#update ServiceFabricManagedCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#create ServiceFabricManagedCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#delete ServiceFabricManagedCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#read ServiceFabricManagedCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/service_fabric_managed_cluster#update ServiceFabricManagedCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference <a name="ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clientApplicationIdInput">clientApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clusterApplicationIdInput">clusterApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clientApplicationId">clientApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clusterApplicationId">clusterApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientApplicationIdInput`<sup>Optional</sup> <a name="clientApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clientApplicationIdInput"></a>

```typescript
public readonly clientApplicationIdInput: string;
```

- *Type:* string

---

##### `clusterApplicationIdInput`<sup>Optional</sup> <a name="clusterApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clusterApplicationIdInput"></a>

```typescript
public readonly clusterApplicationIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientApplicationId`<sup>Required</sup> <a name="clientApplicationId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clientApplicationId"></a>

```typescript
public readonly clientApplicationId: string;
```

- *Type:* string

---

##### `clusterApplicationId`<sup>Required</sup> <a name="clusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.clusterApplicationId"></a>

```typescript
public readonly clusterApplicationId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricManagedClusterAuthenticationActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a>

---


### ServiceFabricManagedClusterAuthenticationCertificateList <a name="ServiceFabricManagedClusterAuthenticationCertificateList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.get"></a>

```typescript
public get(index: number): ServiceFabricManagedClusterAuthenticationCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate">ServiceFabricManagedClusterAuthenticationCertificate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterAuthenticationCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate">ServiceFabricManagedClusterAuthenticationCertificate</a>[]

---


### ServiceFabricManagedClusterAuthenticationCertificateOutputReference <a name="ServiceFabricManagedClusterAuthenticationCertificateOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.resetCommonName"></a>

```typescript
public resetCommonName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate">ServiceFabricManagedClusterAuthenticationCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.thumbprintInput"></a>

```typescript
public readonly thumbprintInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterAuthenticationCertificate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate">ServiceFabricManagedClusterAuthenticationCertificate</a>

---


### ServiceFabricManagedClusterAuthenticationOutputReference <a name="ServiceFabricManagedClusterAuthenticationOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putActiveDirectory">putActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectory` <a name="putActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putActiveDirectory"></a>

```typescript
public putActiveDirectory(value: ServiceFabricManagedClusterAuthenticationActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a>

---

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putCertificate"></a>

```typescript
public putCertificate(value: IResolvable | ServiceFabricManagedClusterAuthenticationCertificate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.putCertificate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate">ServiceFabricManagedClusterAuthenticationCertificate</a>[]

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.activeDirectory">activeDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference">ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList">ServiceFabricManagedClusterAuthenticationCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.certificateInput">certificateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate">ServiceFabricManagedClusterAuthenticationCertificate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference">ServiceFabricManagedClusterAuthenticationActiveDirectoryOutputReference</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.certificate"></a>

```typescript
public readonly certificate: ServiceFabricManagedClusterAuthenticationCertificateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificateList">ServiceFabricManagedClusterAuthenticationCertificateList</a>

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: ServiceFabricManagedClusterAuthenticationActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationActiveDirectory">ServiceFabricManagedClusterAuthenticationActiveDirectory</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: IResolvable | ServiceFabricManagedClusterAuthenticationCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationCertificate">ServiceFabricManagedClusterAuthenticationCertificate</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceFabricManagedClusterAuthentication;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterAuthentication">ServiceFabricManagedClusterAuthentication</a>

---


### ServiceFabricManagedClusterCustomFabricSettingList <a name="ServiceFabricManagedClusterCustomFabricSettingList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.get"></a>

```typescript
public get(index: number): ServiceFabricManagedClusterCustomFabricSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting">ServiceFabricManagedClusterCustomFabricSetting</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterCustomFabricSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting">ServiceFabricManagedClusterCustomFabricSetting</a>[]

---


### ServiceFabricManagedClusterCustomFabricSettingOutputReference <a name="ServiceFabricManagedClusterCustomFabricSettingOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.parameterInput">parameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.sectionInput">sectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.section">section</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting">ServiceFabricManagedClusterCustomFabricSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: string;
```

- *Type:* string

---

##### `sectionInput`<sup>Optional</sup> <a name="sectionInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.sectionInput"></a>

```typescript
public readonly sectionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `section`<sup>Required</sup> <a name="section" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.section"></a>

```typescript
public readonly section: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterCustomFabricSetting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterCustomFabricSetting">ServiceFabricManagedClusterCustomFabricSetting</a>

---


### ServiceFabricManagedClusterLbRuleList <a name="ServiceFabricManagedClusterLbRuleList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.get"></a>

```typescript
public get(index: number): ServiceFabricManagedClusterLbRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule">ServiceFabricManagedClusterLbRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterLbRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule">ServiceFabricManagedClusterLbRule</a>[]

---


### ServiceFabricManagedClusterLbRuleOutputReference <a name="ServiceFabricManagedClusterLbRuleOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resetProbeRequestPath">resetProbeRequestPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProbeRequestPath` <a name="resetProbeRequestPath" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.resetProbeRequestPath"></a>

```typescript
public resetProbeRequestPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.frontendPortInput">frontendPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeProtocolInput">probeProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeRequestPathInput">probeRequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.backendPort">backendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.frontendPort">frontendPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeProtocol">probeProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeRequestPath">probeRequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule">ServiceFabricManagedClusterLbRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.backendPortInput"></a>

```typescript
public readonly backendPortInput: number;
```

- *Type:* number

---

##### `frontendPortInput`<sup>Optional</sup> <a name="frontendPortInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.frontendPortInput"></a>

```typescript
public readonly frontendPortInput: number;
```

- *Type:* number

---

##### `probeProtocolInput`<sup>Optional</sup> <a name="probeProtocolInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeProtocolInput"></a>

```typescript
public readonly probeProtocolInput: string;
```

- *Type:* string

---

##### `probeRequestPathInput`<sup>Optional</sup> <a name="probeRequestPathInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeRequestPathInput"></a>

```typescript
public readonly probeRequestPathInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.backendPort"></a>

```typescript
public readonly backendPort: number;
```

- *Type:* number

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.frontendPort"></a>

```typescript
public readonly frontendPort: number;
```

- *Type:* number

---

##### `probeProtocol`<sup>Required</sup> <a name="probeProtocol" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeProtocol"></a>

```typescript
public readonly probeProtocol: string;
```

- *Type:* string

---

##### `probeRequestPath`<sup>Required</sup> <a name="probeRequestPath" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.probeRequestPath"></a>

```typescript
public readonly probeRequestPath: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterLbRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterLbRule">ServiceFabricManagedClusterLbRule</a>

---


### ServiceFabricManagedClusterNodeTypeList <a name="ServiceFabricManagedClusterNodeTypeList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.get"></a>

```typescript
public get(index: number): ServiceFabricManagedClusterNodeTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType">ServiceFabricManagedClusterNodeType</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterNodeType[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType">ServiceFabricManagedClusterNodeType</a>[]

---


### ServiceFabricManagedClusterNodeTypeOutputReference <a name="ServiceFabricManagedClusterNodeTypeOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.putVmSecrets">putVmSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetCapacities">resetCapacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetDataDiskType">resetDataDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetMultiplePlacementGroupsEnabled">resetMultiplePlacementGroupsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetPlacementProperties">resetPlacementProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetStateless">resetStateless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetVmSecrets">resetVmSecrets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVmSecrets` <a name="putVmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.putVmSecrets"></a>

```typescript
public putVmSecrets(value: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecrets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.putVmSecrets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets">ServiceFabricManagedClusterNodeTypeVmSecrets</a>[]

---

##### `resetCapacities` <a name="resetCapacities" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetCapacities"></a>

```typescript
public resetCapacities(): void
```

##### `resetDataDiskType` <a name="resetDataDiskType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetDataDiskType"></a>

```typescript
public resetDataDiskType(): void
```

##### `resetMultiplePlacementGroupsEnabled` <a name="resetMultiplePlacementGroupsEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetMultiplePlacementGroupsEnabled"></a>

```typescript
public resetMultiplePlacementGroupsEnabled(): void
```

##### `resetPlacementProperties` <a name="resetPlacementProperties" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetPlacementProperties"></a>

```typescript
public resetPlacementProperties(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetStateless` <a name="resetStateless" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetStateless"></a>

```typescript
public resetStateless(): void
```

##### `resetVmSecrets` <a name="resetVmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.resetVmSecrets"></a>

```typescript
public resetVmSecrets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSecrets">vmSecrets</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList">ServiceFabricManagedClusterNodeTypeVmSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.applicationPortRangeInput">applicationPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.capacitiesInput">capacitiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskSizeGbInput">dataDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskTypeInput">dataDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.ephemeralPortRangeInput">ephemeralPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.multiplePlacementGroupsEnabledInput">multiplePlacementGroupsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.placementPropertiesInput">placementPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.statelessInput">statelessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageOfferInput">vmImageOfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImagePublisherInput">vmImagePublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageSkuInput">vmImageSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageVersionInput">vmImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmInstanceCountInput">vmInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSecretsInput">vmSecretsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets">ServiceFabricManagedClusterNodeTypeVmSecrets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.applicationPortRange">applicationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.capacities">capacities</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskType">dataDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.ephemeralPortRange">ephemeralPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.multiplePlacementGroupsEnabled">multiplePlacementGroupsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.placementProperties">placementProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.primary">primary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.stateless">stateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageOffer">vmImageOffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImagePublisher">vmImagePublisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageSku">vmImageSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageVersion">vmImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmInstanceCount">vmInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType">ServiceFabricManagedClusterNodeType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vmSecrets`<sup>Required</sup> <a name="vmSecrets" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSecrets"></a>

```typescript
public readonly vmSecrets: ServiceFabricManagedClusterNodeTypeVmSecretsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList">ServiceFabricManagedClusterNodeTypeVmSecretsList</a>

---

##### `applicationPortRangeInput`<sup>Optional</sup> <a name="applicationPortRangeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.applicationPortRangeInput"></a>

```typescript
public readonly applicationPortRangeInput: string;
```

- *Type:* string

---

##### `capacitiesInput`<sup>Optional</sup> <a name="capacitiesInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.capacitiesInput"></a>

```typescript
public readonly capacitiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataDiskSizeGbInput`<sup>Optional</sup> <a name="dataDiskSizeGbInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskSizeGbInput"></a>

```typescript
public readonly dataDiskSizeGbInput: number;
```

- *Type:* number

---

##### `dataDiskTypeInput`<sup>Optional</sup> <a name="dataDiskTypeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskTypeInput"></a>

```typescript
public readonly dataDiskTypeInput: string;
```

- *Type:* string

---

##### `ephemeralPortRangeInput`<sup>Optional</sup> <a name="ephemeralPortRangeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.ephemeralPortRangeInput"></a>

```typescript
public readonly ephemeralPortRangeInput: string;
```

- *Type:* string

---

##### `multiplePlacementGroupsEnabledInput`<sup>Optional</sup> <a name="multiplePlacementGroupsEnabledInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.multiplePlacementGroupsEnabledInput"></a>

```typescript
public readonly multiplePlacementGroupsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `placementPropertiesInput`<sup>Optional</sup> <a name="placementPropertiesInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.placementPropertiesInput"></a>

```typescript
public readonly placementPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statelessInput`<sup>Optional</sup> <a name="statelessInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.statelessInput"></a>

```typescript
public readonly statelessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vmImageOfferInput`<sup>Optional</sup> <a name="vmImageOfferInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageOfferInput"></a>

```typescript
public readonly vmImageOfferInput: string;
```

- *Type:* string

---

##### `vmImagePublisherInput`<sup>Optional</sup> <a name="vmImagePublisherInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImagePublisherInput"></a>

```typescript
public readonly vmImagePublisherInput: string;
```

- *Type:* string

---

##### `vmImageSkuInput`<sup>Optional</sup> <a name="vmImageSkuInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageSkuInput"></a>

```typescript
public readonly vmImageSkuInput: string;
```

- *Type:* string

---

##### `vmImageVersionInput`<sup>Optional</sup> <a name="vmImageVersionInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageVersionInput"></a>

```typescript
public readonly vmImageVersionInput: string;
```

- *Type:* string

---

##### `vmInstanceCountInput`<sup>Optional</sup> <a name="vmInstanceCountInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmInstanceCountInput"></a>

```typescript
public readonly vmInstanceCountInput: number;
```

- *Type:* number

---

##### `vmSecretsInput`<sup>Optional</sup> <a name="vmSecretsInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSecretsInput"></a>

```typescript
public readonly vmSecretsInput: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets">ServiceFabricManagedClusterNodeTypeVmSecrets</a>[]

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSizeInput"></a>

```typescript
public readonly vmSizeInput: string;
```

- *Type:* string

---

##### `applicationPortRange`<sup>Required</sup> <a name="applicationPortRange" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.applicationPortRange"></a>

```typescript
public readonly applicationPortRange: string;
```

- *Type:* string

---

##### `capacities`<sup>Required</sup> <a name="capacities" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.capacities"></a>

```typescript
public readonly capacities: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataDiskSizeGb`<sup>Required</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskSizeGb"></a>

```typescript
public readonly dataDiskSizeGb: number;
```

- *Type:* number

---

##### `dataDiskType`<sup>Required</sup> <a name="dataDiskType" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.dataDiskType"></a>

```typescript
public readonly dataDiskType: string;
```

- *Type:* string

---

##### `ephemeralPortRange`<sup>Required</sup> <a name="ephemeralPortRange" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.ephemeralPortRange"></a>

```typescript
public readonly ephemeralPortRange: string;
```

- *Type:* string

---

##### `multiplePlacementGroupsEnabled`<sup>Required</sup> <a name="multiplePlacementGroupsEnabled" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.multiplePlacementGroupsEnabled"></a>

```typescript
public readonly multiplePlacementGroupsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `placementProperties`<sup>Required</sup> <a name="placementProperties" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.placementProperties"></a>

```typescript
public readonly placementProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.stateless"></a>

```typescript
public readonly stateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vmImageOffer`<sup>Required</sup> <a name="vmImageOffer" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageOffer"></a>

```typescript
public readonly vmImageOffer: string;
```

- *Type:* string

---

##### `vmImagePublisher`<sup>Required</sup> <a name="vmImagePublisher" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImagePublisher"></a>

```typescript
public readonly vmImagePublisher: string;
```

- *Type:* string

---

##### `vmImageSku`<sup>Required</sup> <a name="vmImageSku" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageSku"></a>

```typescript
public readonly vmImageSku: string;
```

- *Type:* string

---

##### `vmImageVersion`<sup>Required</sup> <a name="vmImageVersion" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmImageVersion"></a>

```typescript
public readonly vmImageVersion: string;
```

- *Type:* string

---

##### `vmInstanceCount`<sup>Required</sup> <a name="vmInstanceCount" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmInstanceCount"></a>

```typescript
public readonly vmInstanceCount: number;
```

- *Type:* number

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterNodeType;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeType">ServiceFabricManagedClusterNodeType</a>

---


### ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList <a name="ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.get"></a>

```typescript
public get(index: number): ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates">ServiceFabricManagedClusterNodeTypeVmSecretsCertificates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecretsCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates">ServiceFabricManagedClusterNodeTypeVmSecretsCertificates</a>[]

---


### ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference <a name="ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.storeInput">storeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.store">store</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates">ServiceFabricManagedClusterNodeTypeVmSecretsCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storeInput`<sup>Optional</sup> <a name="storeInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.storeInput"></a>

```typescript
public readonly storeInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `store`<sup>Required</sup> <a name="store" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.store"></a>

```typescript
public readonly store: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecretsCertificates;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates">ServiceFabricManagedClusterNodeTypeVmSecretsCertificates</a>

---


### ServiceFabricManagedClusterNodeTypeVmSecretsList <a name="ServiceFabricManagedClusterNodeTypeVmSecretsList" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.get"></a>

```typescript
public get(index: number): ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets">ServiceFabricManagedClusterNodeTypeVmSecrets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets">ServiceFabricManagedClusterNodeTypeVmSecrets</a>[]

---


### ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference <a name="ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.putCertificates">putCertificates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificates` <a name="putCertificates" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.putCertificates"></a>

```typescript
public putCertificates(value: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecretsCertificates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.putCertificates.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates">ServiceFabricManagedClusterNodeTypeVmSecretsCertificates</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList">ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.certificatesInput">certificatesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates">ServiceFabricManagedClusterNodeTypeVmSecretsCertificates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets">ServiceFabricManagedClusterNodeTypeVmSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.certificates"></a>

```typescript
public readonly certificates: ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList">ServiceFabricManagedClusterNodeTypeVmSecretsCertificatesList</a>

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.certificatesInput"></a>

```typescript
public readonly certificatesInput: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecretsCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsCertificates">ServiceFabricManagedClusterNodeTypeVmSecretsCertificates</a>[]

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterNodeTypeVmSecrets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterNodeTypeVmSecrets">ServiceFabricManagedClusterNodeTypeVmSecrets</a>

---


### ServiceFabricManagedClusterTimeoutsOutputReference <a name="ServiceFabricManagedClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { serviceFabricManagedCluster } from '@cdktf/provider-azurerm'

new serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceFabricManagedClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.serviceFabricManagedCluster.ServiceFabricManagedClusterTimeouts">ServiceFabricManagedClusterTimeouts</a>

---




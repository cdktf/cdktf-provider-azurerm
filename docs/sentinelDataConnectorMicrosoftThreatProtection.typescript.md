# `sentinelDataConnectorMicrosoftThreatProtection` Submodule <a name="`sentinelDataConnectorMicrosoftThreatProtection` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftThreatProtection <a name="SentinelDataConnectorMicrosoftThreatProtection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection azurerm_sentinel_data_connector_microsoft_threat_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer"></a>

```typescript
import { sentinelDataConnectorMicrosoftThreatProtection } from '@cdktf/provider-azurerm'

new sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection(scope: Construct, id: string, config: SentinelDataConnectorMicrosoftThreatProtectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig">SentinelDataConnectorMicrosoftThreatProtectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig">SentinelDataConnectorMicrosoftThreatProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelDataConnectorMicrosoftThreatProtectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorMicrosoftThreatProtection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isConstruct"></a>

```typescript
import { sentinelDataConnectorMicrosoftThreatProtection } from '@cdktf/provider-azurerm'

sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformElement"></a>

```typescript
import { sentinelDataConnectorMicrosoftThreatProtection } from '@cdktf/provider-azurerm'

sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformResource"></a>

```typescript
import { sentinelDataConnectorMicrosoftThreatProtection } from '@cdktf/provider-azurerm'

sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport"></a>

```typescript
import { sentinelDataConnectorMicrosoftThreatProtection } from '@cdktf/provider-azurerm'

sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SentinelDataConnectorMicrosoftThreatProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorMicrosoftThreatProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorMicrosoftThreatProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorMicrosoftThreatProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelDataConnectorMicrosoftThreatProtectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftThreatProtectionConfig <a name="SentinelDataConnectorMicrosoftThreatProtectionConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.Initializer"></a>

```typescript
import { sentinelDataConnectorMicrosoftThreatProtection } from '@cdktf/provider-azurerm'

const sentinelDataConnectorMicrosoftThreatProtectionConfig: sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#name SentinelDataConnectorMicrosoftThreatProtection#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#id SentinelDataConnectorMicrosoftThreatProtection#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#tenant_id SentinelDataConnectorMicrosoftThreatProtection#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatProtection#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#name SentinelDataConnectorMicrosoftThreatProtection#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#id SentinelDataConnectorMicrosoftThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#tenant_id SentinelDataConnectorMicrosoftThreatProtection#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorMicrosoftThreatProtectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#timeouts SentinelDataConnectorMicrosoftThreatProtection#timeouts}

---

### SentinelDataConnectorMicrosoftThreatProtectionTimeouts <a name="SentinelDataConnectorMicrosoftThreatProtectionTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.Initializer"></a>

```typescript
import { sentinelDataConnectorMicrosoftThreatProtection } from '@cdktf/provider-azurerm'

const sentinelDataConnectorMicrosoftThreatProtectionTimeouts: sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#create SentinelDataConnectorMicrosoftThreatProtection#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#delete SentinelDataConnectorMicrosoftThreatProtection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#read SentinelDataConnectorMicrosoftThreatProtection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#create SentinelDataConnectorMicrosoftThreatProtection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#delete SentinelDataConnectorMicrosoftThreatProtection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/sentinel_data_connector_microsoft_threat_protection#read SentinelDataConnectorMicrosoftThreatProtection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelDataConnectorMicrosoftThreatProtection } from '@cdktf/provider-azurerm'

new sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelDataConnectorMicrosoftThreatProtectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatProtection.SentinelDataConnectorMicrosoftThreatProtectionTimeouts">SentinelDataConnectorMicrosoftThreatProtectionTimeouts</a>

---




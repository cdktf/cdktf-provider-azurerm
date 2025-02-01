# `sentinelDataConnectorThreatIntelligenceTaxii` Submodule <a name="`sentinelDataConnectorThreatIntelligenceTaxii` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorThreatIntelligenceTaxii <a name="SentinelDataConnectorThreatIntelligenceTaxii" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii azurerm_sentinel_data_connector_threat_intelligence_taxii}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer"></a>

```typescript
import { sentinelDataConnectorThreatIntelligenceTaxii } from '@cdktf/provider-azurerm'

new sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii(scope: Construct, id: string, config: SentinelDataConnectorThreatIntelligenceTaxiiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig">SentinelDataConnectorThreatIntelligenceTaxiiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig">SentinelDataConnectorThreatIntelligenceTaxiiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetLookbackDate">resetLookbackDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPollingFrequency">resetPollingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.putTimeouts"></a>

```typescript
public putTimeouts(value: SentinelDataConnectorThreatIntelligenceTaxiiTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLookbackDate` <a name="resetLookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetLookbackDate"></a>

```typescript
public resetLookbackDate(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPollingFrequency` <a name="resetPollingFrequency" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetPollingFrequency"></a>

```typescript
public resetPollingFrequency(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.resetUserName"></a>

```typescript
public resetUserName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelDataConnectorThreatIntelligenceTaxii resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct"></a>

```typescript
import { sentinelDataConnectorThreatIntelligenceTaxii } from '@cdktf/provider-azurerm'

sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement"></a>

```typescript
import { sentinelDataConnectorThreatIntelligenceTaxii } from '@cdktf/provider-azurerm'

sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource"></a>

```typescript
import { sentinelDataConnectorThreatIntelligenceTaxii } from '@cdktf/provider-azurerm'

sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport"></a>

```typescript
import { sentinelDataConnectorThreatIntelligenceTaxii } from '@cdktf/provider-azurerm'

sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SentinelDataConnectorThreatIntelligenceTaxii resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SentinelDataConnectorThreatIntelligenceTaxii to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SentinelDataConnectorThreatIntelligenceTaxii that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorThreatIntelligenceTaxii to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrlInput">apiRootUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDateInput">lookbackDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequencyInput">pollingFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrl">apiRootUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDate">lookbackDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequency">pollingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference">SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference</a>

---

##### `apiRootUrlInput`<sup>Optional</sup> <a name="apiRootUrlInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrlInput"></a>

```typescript
public readonly apiRootUrlInput: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `lookbackDateInput`<sup>Optional</sup> <a name="lookbackDateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDateInput"></a>

```typescript
public readonly lookbackDateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pollingFrequencyInput`<sup>Optional</sup> <a name="pollingFrequencyInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequencyInput"></a>

```typescript
public readonly pollingFrequencyInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SentinelDataConnectorThreatIntelligenceTaxiiTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `apiRootUrl`<sup>Required</sup> <a name="apiRootUrl" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.apiRootUrl"></a>

```typescript
public readonly apiRootUrl: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `lookbackDate`<sup>Required</sup> <a name="lookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.lookbackDate"></a>

```typescript
public readonly lookbackDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `pollingFrequency`<sup>Required</sup> <a name="pollingFrequency" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.pollingFrequency"></a>

```typescript
public readonly pollingFrequency: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxii.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorThreatIntelligenceTaxiiConfig <a name="SentinelDataConnectorThreatIntelligenceTaxiiConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.Initializer"></a>

```typescript
import { sentinelDataConnectorThreatIntelligenceTaxii } from '@cdktf/provider-azurerm'

const sentinelDataConnectorThreatIntelligenceTaxiiConfig: sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.apiRootUrl">apiRootUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#api_root_url SentinelDataConnectorThreatIntelligenceTaxii#api_root_url}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.collectionId">collectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#collection_id SentinelDataConnectorThreatIntelligenceTaxii#collection_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#display_name SentinelDataConnectorThreatIntelligenceTaxii#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#log_analytics_workspace_id SentinelDataConnectorThreatIntelligenceTaxii#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#name SentinelDataConnectorThreatIntelligenceTaxii#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#id SentinelDataConnectorThreatIntelligenceTaxii#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lookbackDate">lookbackDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#lookback_date SentinelDataConnectorThreatIntelligenceTaxii#lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#password SentinelDataConnectorThreatIntelligenceTaxii#password}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.pollingFrequency">pollingFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#polling_frequency SentinelDataConnectorThreatIntelligenceTaxii#polling_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#tenant_id SentinelDataConnectorThreatIntelligenceTaxii#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#user_name SentinelDataConnectorThreatIntelligenceTaxii#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiRootUrl`<sup>Required</sup> <a name="apiRootUrl" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.apiRootUrl"></a>

```typescript
public readonly apiRootUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#api_root_url SentinelDataConnectorThreatIntelligenceTaxii#api_root_url}.

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#collection_id SentinelDataConnectorThreatIntelligenceTaxii#collection_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#display_name SentinelDataConnectorThreatIntelligenceTaxii#display_name}.

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#log_analytics_workspace_id SentinelDataConnectorThreatIntelligenceTaxii#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#name SentinelDataConnectorThreatIntelligenceTaxii#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#id SentinelDataConnectorThreatIntelligenceTaxii#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lookbackDate`<sup>Optional</sup> <a name="lookbackDate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.lookbackDate"></a>

```typescript
public readonly lookbackDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#lookback_date SentinelDataConnectorThreatIntelligenceTaxii#lookback_date}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#password SentinelDataConnectorThreatIntelligenceTaxii#password}.

---

##### `pollingFrequency`<sup>Optional</sup> <a name="pollingFrequency" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.pollingFrequency"></a>

```typescript
public readonly pollingFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#polling_frequency SentinelDataConnectorThreatIntelligenceTaxii#polling_frequency}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#tenant_id SentinelDataConnectorThreatIntelligenceTaxii#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SentinelDataConnectorThreatIntelligenceTaxiiTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#timeouts SentinelDataConnectorThreatIntelligenceTaxii#timeouts}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#user_name SentinelDataConnectorThreatIntelligenceTaxii#user_name}.

---

### SentinelDataConnectorThreatIntelligenceTaxiiTimeouts <a name="SentinelDataConnectorThreatIntelligenceTaxiiTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.Initializer"></a>

```typescript
import { sentinelDataConnectorThreatIntelligenceTaxii } from '@cdktf/provider-azurerm'

const sentinelDataConnectorThreatIntelligenceTaxiiTimeouts: sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#create SentinelDataConnectorThreatIntelligenceTaxii#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#delete SentinelDataConnectorThreatIntelligenceTaxii#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#read SentinelDataConnectorThreatIntelligenceTaxii#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#update SentinelDataConnectorThreatIntelligenceTaxii#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#create SentinelDataConnectorThreatIntelligenceTaxii#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#delete SentinelDataConnectorThreatIntelligenceTaxii#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#read SentinelDataConnectorThreatIntelligenceTaxii#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#update SentinelDataConnectorThreatIntelligenceTaxii#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference <a name="SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer"></a>

```typescript
import { sentinelDataConnectorThreatIntelligenceTaxii } from '@cdktf/provider-azurerm'

new sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SentinelDataConnectorThreatIntelligenceTaxiiTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.sentinelDataConnectorThreatIntelligenceTaxii.SentinelDataConnectorThreatIntelligenceTaxiiTimeouts">SentinelDataConnectorThreatIntelligenceTaxiiTimeouts</a>

---




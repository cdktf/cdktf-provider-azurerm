# `azurerm_subscription_cost_management_export`

Refer to the Terraform Registory for docs: [`azurerm_subscription_cost_management_export`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export).

# `subscriptionCostManagementExport` Submodule <a name="`subscriptionCostManagementExport` Submodule" id="@cdktf/provider-azurerm.subscriptionCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionCostManagementExport <a name="SubscriptionCostManagementExport" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export azurerm_subscription_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

new subscriptionCostManagementExport.SubscriptionCostManagementExport(scope: Construct, id: string, config: SubscriptionCostManagementExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig">SubscriptionCostManagementExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig">SubscriptionCostManagementExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions">putExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation">putExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putExportDataOptions` <a name="putExportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions"></a>

```typescript
public putExportDataOptions(value: SubscriptionCostManagementExportExportDataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---

##### `putExportDataStorageLocation` <a name="putExportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation"></a>

```typescript
public putExportDataStorageLocation(value: SubscriptionCostManagementExportExportDataStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts"></a>

```typescript
public putTimeouts(value: SubscriptionCostManagementExportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference">SubscriptionCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference">SubscriptionCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference">SubscriptionCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptionsInput">exportDataOptionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocationInput">exportDataStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDateInput">recurrencePeriodEndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDateInput">recurrencePeriodStartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptions"></a>

```typescript
public readonly exportDataOptions: SubscriptionCostManagementExportExportDataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference">SubscriptionCostManagementExportExportDataOptionsOutputReference</a>

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocation"></a>

```typescript
public readonly exportDataStorageLocation: SubscriptionCostManagementExportExportDataStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference">SubscriptionCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeouts"></a>

```typescript
public readonly timeouts: SubscriptionCostManagementExportTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference">SubscriptionCostManagementExportTimeoutsOutputReference</a>

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportDataOptionsInput`<sup>Optional</sup> <a name="exportDataOptionsInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptionsInput"></a>

```typescript
public readonly exportDataOptionsInput: SubscriptionCostManagementExportExportDataOptions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---

##### `exportDataStorageLocationInput`<sup>Optional</sup> <a name="exportDataStorageLocationInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocationInput"></a>

```typescript
public readonly exportDataStorageLocationInput: SubscriptionCostManagementExportExportDataStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recurrencePeriodEndDateInput`<sup>Optional</sup> <a name="recurrencePeriodEndDateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```typescript
public readonly recurrencePeriodEndDateInput: string;
```

- *Type:* string

---

##### `recurrencePeriodStartDateInput`<sup>Optional</sup> <a name="recurrencePeriodStartDateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```typescript
public readonly recurrencePeriodStartDateInput: string;
```

- *Type:* string

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceTypeInput"></a>

```typescript
public readonly recurrenceTypeInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubscriptionCostManagementExportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDate"></a>

```typescript
public readonly recurrencePeriodEndDate: string;
```

- *Type:* string

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDate"></a>

```typescript
public readonly recurrencePeriodStartDate: string;
```

- *Type:* string

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionCostManagementExportConfig <a name="SubscriptionCostManagementExportConfig" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.Initializer"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

const subscriptionCostManagementExportConfig: subscriptionCostManagementExport.SubscriptionCostManagementExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataOptions">exportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataStorageLocation">exportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodEndDate">recurrencePeriodEndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodStartDate">recurrencePeriodStartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportDataOptions`<sup>Required</sup> <a name="exportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataOptions"></a>

```typescript
public readonly exportDataOptions: SubscriptionCostManagementExportExportDataOptions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#export_data_options SubscriptionCostManagementExport#export_data_options}

---

##### `exportDataStorageLocation`<sup>Required</sup> <a name="exportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataStorageLocation"></a>

```typescript
public readonly exportDataStorageLocation: SubscriptionCostManagementExportExportDataStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#export_data_storage_location SubscriptionCostManagementExport#export_data_storage_location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}.

---

##### `recurrencePeriodEndDate`<sup>Required</sup> <a name="recurrencePeriodEndDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```typescript
public readonly recurrencePeriodEndDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}.

---

##### `recurrencePeriodStartDate`<sup>Required</sup> <a name="recurrencePeriodStartDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```typescript
public readonly recurrencePeriodStartDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SubscriptionCostManagementExportTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#timeouts SubscriptionCostManagementExport#timeouts}

---

### SubscriptionCostManagementExportExportDataOptions <a name="SubscriptionCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.Initializer"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

const subscriptionCostManagementExportExportDataOptions: subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.timeFrame">timeFrame</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#time_frame SubscriptionCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#type SubscriptionCostManagementExport#type}. |

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.timeFrame"></a>

```typescript
public readonly timeFrame: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#time_frame SubscriptionCostManagementExport#time_frame}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#type SubscriptionCostManagementExport#type}.

---

### SubscriptionCostManagementExportExportDataStorageLocation <a name="SubscriptionCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.Initializer"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

const subscriptionCostManagementExportExportDataStorageLocation: subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.containerId">containerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#container_id SubscriptionCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.rootFolderPath">rootFolderPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#root_folder_path SubscriptionCostManagementExport#root_folder_path}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#container_id SubscriptionCostManagementExport#container_id}.

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```typescript
public readonly rootFolderPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#root_folder_path SubscriptionCostManagementExport#root_folder_path}.

---

### SubscriptionCostManagementExportTimeouts <a name="SubscriptionCostManagementExportTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.Initializer"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

const subscriptionCostManagementExportTimeouts: subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#create SubscriptionCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#delete SubscriptionCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#read SubscriptionCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#update SubscriptionCostManagementExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#create SubscriptionCostManagementExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#delete SubscriptionCostManagementExport#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#read SubscriptionCostManagementExport#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/subscription_cost_management_export#update SubscriptionCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionCostManagementExportExportDataOptionsOutputReference <a name="SubscriptionCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

new subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">timeFrameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrame">timeFrame</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeFrameInput`<sup>Optional</sup> <a name="timeFrameInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```typescript
public readonly timeFrameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `timeFrame`<sup>Required</sup> <a name="timeFrame" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```typescript
public readonly timeFrame: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SubscriptionCostManagementExportExportDataOptions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---


### SubscriptionCostManagementExportExportDataStorageLocationOutputReference <a name="SubscriptionCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

new subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">rootFolderPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">rootFolderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```typescript
public readonly containerIdInput: string;
```

- *Type:* string

---

##### `rootFolderPathInput`<sup>Optional</sup> <a name="rootFolderPathInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```typescript
public readonly rootFolderPathInput: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `rootFolderPath`<sup>Required</sup> <a name="rootFolderPath" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```typescript
public readonly rootFolderPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SubscriptionCostManagementExportExportDataStorageLocation;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---


### SubscriptionCostManagementExportTimeoutsOutputReference <a name="SubscriptionCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer"></a>

```typescript
import { subscriptionCostManagementExport } from '@cdktf/provider-azurerm'

new subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubscriptionCostManagementExportTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

---



